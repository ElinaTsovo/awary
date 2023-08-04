import multer from "multer"
import  express  from "express"


export const uppload = express()
const upload = multer({ dest: 'uploads/' })
uppload.post('/profile', upload.single('avatar'), function (req, res, next) {
        console.log('photo uploaded')
})