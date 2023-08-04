import { Router } from "express";
import multer from "multer"
import  express  from "express"
import { fileOptions } from "../middlewere/upload";
import {createUser, getUser, getUserID,updateUser, deleteUser, loginUser} from '../controllers/controllerUser';
import { createPost, getPost, updatePost, deletePost} from "../controllers/postController";
import { createComent, deleteComent, getComent, getComentID, getComentpostID, updateComent } from "../controllers/comentController";
import { createLike, getLike, getLikeID } from "../controllers/likeController";
import { AUTH_GUARD } from "../middlewere/auth.guard";
import { user } from '../models/schemaUser'

export const router = Router()
const uppload = express()


router.post ('/awary/createUser', createUser )
router.post ('/awary/loginUser',loginUser )
router.get ('/awary/getUser', AUTH_GUARD, getUser)
router.get ('/awary/getUserID/:_id',  AUTH_GUARD, getUserID)
router.put ('/awary/updateUser/:_id',  AUTH_GUARD ,updateUser)
router.delete ('/awary/deleteUser/:_id', AUTH_GUARD ,deleteUser)

router.post ('/awary/createPost/',  AUTH_GUARD, createPost)
router.get ('/awary/getPost/',  AUTH_GUARD ,getPost)
router.put ('/awary/updatePost/:_id', AUTH_GUARD, updatePost)
router.delete ('/awary/deletePost/:_id',  AUTH_GUARD, deletePost)

router.post ('/awary/createComent/',  AUTH_GUARD, createComent)
router.put ('/awary/updateComent/:_id',  AUTH_GUARD, updateComent)
router.get ('/awary/getComent',  AUTH_GUARD, getComent)
router.get ('/awary/getComent/:_id',  AUTH_GUARD, getComentID)
router.get ('/awary/getComentpostID/:postID',  AUTH_GUARD, getComentpostID)
router.delete ('/awary/deleteComent/:_id', AUTH_GUARD, deleteComent)

router.post ('/awary/createLike', AUTH_GUARD, createLike)
router.get ('/awary/getLike', AUTH_GUARD, getLike)
router.get ('/awary/getLikeID/:_id', AUTH_GUARD, getLikeID)

// const upload = multer({ dest: 'uploads/' })
// uppload.post('/awary/profile', upload.single('avatar'), function (req, res, next) {
//         console.log('photo uploaded')
// })

// router.post('/upload', uploads.single('uploads'), (req, res) => {
//     console.log(req.file)
//     if (!req.file) {
//         return res.status(400).send('Nenhum arquivo foi enviado.');
//     }

//     res.send('Arquivo enviado com sucesso!');
// });

//router.post ('/awary/upload', AUTH_GUARD ,uppload)

const upload = multer(fileOptions)

router.post('/upload', upload.single('profile'), async function (req: any, res, next) {
    
      if (!req.file) {
           return res.status(400).json('Nenhum arquivo foi enviado.');
        }

    return res.status(200).json({'filename': req.file.filename})

       //const updateProfile = await user.updateOne(photoprofileUser) 

})

router.get ('/upload/:filename',async (req:any, res, nex) => {
      return res.sendFile(req.params.filename,{root: './uploads'})
  
})
