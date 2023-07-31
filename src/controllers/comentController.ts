import { Request, Response, request } from 'express'
import {coment} from '../models/comentSchema'

export const createComent= async (request:Request, response:Response) =>{
    const {author,userID,comentt,postComent} = request.body
    try {
        const createComentF = await coment.create({
            comentt  
        })
        return response.status(200).json(createComentF)

    } catch (error) {
        console.log(error)
        return response.status(401).json('erro, tente novamente')
        
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
