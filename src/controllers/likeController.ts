import { Request, Response, request } from 'express'
import {coment} from '../models/comentSchema'
import { user } from '../models/schemaUser'
import { like } from '../models/likeSchema'

export const createLike= async (request:any, response:Response) =>{
    const {postID} = request.body
    try {
        const usuario : any = await user.findOne({uid:request.userId})
        const createLikeF = await like.create({
            postID,
            userID: usuario?._id,
        })
       
        return response.status(200).json(createLikeF)

    } catch (error) {
        console.log(error)
        return response.status(401).json(error)
        
    }
   
}

export const getLike = async (request:Request, response:Response) =>{
    try {
        const getLikeF = await like.find().populate('userID').populate('postID')
        return response.status(200).json({likes:getLikeF,likesCount:getLikeF.length})
    } catch (error) {
        return response.status(4001).json(error)
    }
}
    
 export const getLikeID = async (request:Request, response:Response) =>{
        const {_id} = request.params
    try {
            const getLikeIDF = await coment.findOne({_id}).populate('userID').populate('postID')
            return response.status(200).json(getLikeIDF)
    } catch (error) {
            return response.status(401).json(error)
    }
}
    