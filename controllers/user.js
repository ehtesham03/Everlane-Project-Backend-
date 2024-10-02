
import user from '../models/user-model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();



// import bcrypt from 
export const registerUser = async (req, res ) => {
    try {
        const userdata = req.body
        const isEmailExisted = await user.findOne({ email: userdata.email });
        if (isEmailExisted) {
            return res.status(400).json({ message: "Email Existed" })
        }


        const hashedPassword = await bcrypt.hash(userdata.password, 10);
        userdata.password = hashedPassword
        const User = await user.create(userdata);
        res.status(200).json({ message: "User registered successfully", User })

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//
export const postUserData = async (req, res) => {
    try {
        const { name, username, password, email } = req.body;
       
        // const image = req.files && req.files.length > 0 ? req.files.map(file => file.filename) : [];
        const image = req.file && req.file.path
        console.log(name, email, password, username);
        const isEmailExisted = await user.findOne({ email: email })
        if (isEmailExisted) {
            return res.status(400).json({ message: "Email Existed" })
        }
        const userData = new user({
            name,
            email,
            username,
            password,
            // image
        })
        await userData.save();
        res.status(200).json({ message: "Data Successfully Saved", success: true, userData })

    }
    catch (error) {
        res.status(500).json(error.message)
    };

}
export const getUserData = async (req, res) => {
    try {
        const userData = await user.find();
        res.status(200).json(userData)

    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

export const getUserById = async (req, res) => {
    try {
        const userData = await user.findById(req.params.id);
        if (!userData) {
            return res.status(404).json({ message: "User Not Found" })
        }
        res.status(200).json({ success: true, userData, message: "USER DATA" })

    }
    catch (error) {
        res.status(500).json(error.message)
    }
}
export const updateUser = async (req, res) => {
    try {
        const updatedUserData = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUserData) {
            return res.status(404).json({ message: "User Not Found" })
        }
        res.status(200).json({ success: true, updatedUserData, message: "USER UPDATED" })

    }
    catch (error) {
        res.status(500).json(error.message)
    }
}
export const deleteUser = async (req, res) => {
    try {
        const delteUserData = await user.findByIdAndDelete(req.params.id);
        if (!delteUserData) {
            return res.status(404).json({ message: error.message });

        }
        res.status(200).json({ message: delteUserData })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    try {
        const userdata = req.body;
        const userx = await user.findOne({ email: userdata.email });
        if (!userx) {
            return res.status(400).json({ message: "User Not Found" });
        }
        const isValidPassword = await bcrypt.compare(userdata.password, userx.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        const token = await jwt.sign({ id: userx.id, role: userx.role }, process.env.PRIVATE_KEY, { expiresIn: "5m" })
        res.cookie("jwt", token,{httpOnly:true,secure:true, maxage:5*60*60})
        return res.status(200).json({ success: true, message: "token generated successfully", token: token })
    }

    catch (error) {
        res.status(500).json(error.message)
    }
}

//logout 

export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("jwt")
        return res.status(200).json({ success: true, message: "Logged out" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

// middleware for token verification