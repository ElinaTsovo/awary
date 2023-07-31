import { Router } from "express";
import {createUser, getUser, getUserID,updateUser, deleteUser} from '../controllers/controllerUser'
import { createPost, getPost, updatePost, deletePost} from "../controllers/postController";
import { createComent, deleteComent, updateComent } from "../controllers/comentController";

export const router = Router()


router.post ('/awary/createUser', createUser )
router.get ('/awary/getUser', getUser)
router.get ('/awary/getUserID/:_id',getUserID)
router.put ('/awary/updateUser/:_id',updateUser)
router.delete ('/awary/deleteUser/:_id',deleteUser)

router.post ('/awary/createPost', createPost)
router.get ('/awary/getPost', getPost)
router.put ('/awary/updatePost/:_id',updatePost)
router.delete ('/awary/deletePost/:_id',deletePost)

router.post ('/awary/createComent', createComent)
router.put ('/awary/updateComent/:_id',updateComent)
router.delete ('/awary/deleteComent/:_id',deleteComent)

