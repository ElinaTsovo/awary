import { Request, Response, request } from 'express'
import {coment} from '../models/comentSchema'
import { user } from '../models/schemaUser'

export const createComent= async (request:any, response:Response) =>{
    const {comentt,postID} = request.body
    try {
        const usuario : any = await user.findOne({uid:request.userId})
        const createComentF = await coment.create({
            comentt ,
            postID,
            userID:usuario?._id
        })
       
        return response.status(200).json('comentário criado com sucesso')

    } catch (error) {
        console.log(error)
        return response.status(401).json('erro, tente novamente')
        
    }
}

export const getComent = async (request:Request, response:Response) =>{
try {
    const getComentF = await coment.find().populate('userID').populate('postID')
    return response.status(200).json({getComentF, commentCount: getComentF.length})
} catch (error) {
    return response.status(200).json('nenhum post encontrado')
}
}

export const getComentID = async (request:Request, response:Response) =>{
    const {_id} = request.params
    try {
        const getComentIDF = await coment.findOne({_id}).populate('userID').populate('postID')
        return response.status(200).json(getComentIDF)
    } catch (error) {
        return response.status(200).json('nenhum post encontrado')
    }
    }

    export const getComentpostID = async (request:Request, response:Response) =>{
        const {postID} = request.params
        try {
            const getComentF = await coment.find({postID}).populate('userID').populate('postID')
            return response.status(200).json(getComentF)
        } catch (error) {
            return response.status(200).json('nenhum post encontrado')
        }
        }
    


export const updateComent = async (request:Request, response:Response) =>{
    const {_id} = request.params
    const {author,userID,comentt,postComent}  = request.body
    try {
        const updateComentF = await coment.findById({_id})
        if (!updateComentF){
            return response.status(401).json('nenhum comentário encontrado')
        }
        await coment.updateOne({_id},{
            comentt
        })
        return response.status(200).json(updateComentF)

    } catch (error) {
        return response.status(401).json('erro ao actualizar o comentário, tente novamente!')
        
    }
}


export const deleteComent = async (request:Request, response:Response) =>{
    const {_id} = request.params
    try {
        const deletePostF = await coment.findById({_id})
        if(!deletePostF){
            return response.status(401).json('post não encontrado, tente novamente!')
        }

        await coment.deleteOne({_id})
        return response.status(200).json('post deletado com sucesso!')
    } catch (error) {
        return response.status(401).json(error)
    }
}
