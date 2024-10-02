import jwt from "jsonwebtoken"

export const Middleware = async (require, res, next) => {
    require.headers.authorization && require.headers.authorization.startsWith("Bearer")
    const token = require.headers.authorization.split(" ")[1]
    if (!token) return res.status(401).json({ message: "Token Not Found" })

    console.log(token)
    await jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Invalid Token // Not Authorized" })

        }
        require.user = user
        next()
    })
}

export const roleBasedmiddleware =  (...allroles) => {
    return (async (req, res, next) => {
        try {
            if (!allroles.includes(req.user.role)){
                return res.status(403).json({ message: "You are not authorized to perform this action" })
            }
            next()
        }
        catch (error) {
            res.status(403).json({ message: "You are not authorized to perform this action" })
        }

    })

}