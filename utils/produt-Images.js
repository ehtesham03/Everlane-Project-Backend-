import multer from "multer";

const storage = multer.diskStorage({
    destination : function( req,res,cb) {
        cb(null, 'uploads/product-Images')
    },
    filename : function (req,res,cb){
        cb(numm,Date.now(), +'-'+ file.originalname)
    }

})

const uploads = multer({storage: storage})

export default uploads;