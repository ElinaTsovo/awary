import { Request, Response, request } from 'express'
import {post} from '../models/postSchema'

export const createPost = async (request:Request, response:Response) =>{
    const {userID, postTitle, postPhoto, PostLike, coments, likesCouter} = request.body
    try {
        const createPostF = await post.create({
            postTitle,
            postPhoto,
        })
        return response.status(200).json(createPostF)

    } catch (error) {
        return response.status(401).json('erro, tente novamente')
        
    }
   
}

export const getPost = async (request:Request, response:Response) =>{
    try {
        const getPostF = await post.find()
        return response.status(200).json(getPostF)
    } catch (error) {
        return response.status(200).json('nenhum post encontrado')
    }
}


export const updatePost = async (request:Request, response:Response) =>{
    const {_id} = request.params
    const {userID, postTitle, postPhoto, PostLike, coments, likesCouter} = request.body
    try {
        const updatePostF = await post.findById({_id})
        if (!updatePostF){
            return response.status(401).json('nenhum post encontrado')
        }
        await post.updateOne({_id},{
            postTitle,
            postPhoto
        })
        return response.status(200).json(updatePostF)

    } catch (error) {
        return response.status(401).json('erro ao actualizar o post, tente novamente!')
        
    }
}

export const deletePost = async (request:Request, response:Response) =>{
    const {_id} = request.params
    try {
        const deletePostF = await post.findById({_id})
        if(!deletePostF){
            return response.status(401).json('post não encontrado, tente novamente!')
        }

        await post.deleteOne({_id})
        return response.status(200).json('post deletado com sucesso!')
    } catch (error) {
        return response.status(401).json(error)
    }
}