import { Request, Response, request } from 'express'
import {user} from '../models/schemaUser'

export const createUser = async (request:Request, response:Response) =>{
        const {uid, nameUser, emailUser, passwordUser,photoprofileUser} = request.body
        try {
            const createUserF = await user.create({
                nameUser,
                emailUser,
                passwordUser
    
            })
            return response.status(200).json('usuário criado com sucesso')

        } catch (error) {
            return response.status(401).json('erro ao criar usuário, tente novamente')
            
        }
       
}


export const getUser = async (request:Request, response:Response) =>{
    try {
        const getUserF = await user.find()
        return response.status(200).json(getUserF)
    } catch (error) {
        return response.status(200).json('nenhum usuário encontrado')
    }
}

export const getUserID = async (request:Request, response:Response) =>{
        const {_id} = request.params
        try {
            const getUserF = await user.findById({_id})
            if (!getUserF){
                return response.status(401).json('nenhum usuário encontrado')
            }
            return response.status(200).json(getUserF)
        } catch (error) {
            return response.status(200).json('nenhum usuário encontrado')
        }
}

export const updateUser = async (request:Request, response:Response) =>{
    const {_id} = request.params
    const {uid, nameUser, emailUser, passwordUser,photoprofileUser} = request.body
    try {
        const updateUserF = await user.findById({_id})
        if (!updateUserF){
            return response.status(401).json('nenhum usuário encontrado')
        }
        await user.updateOne({_id},{
            nameUser,
            emailUser,
            passwordUser,
            photoprofileUser

        })
        return response.status(200).json(updateUserF)

    } catch (error) {
        return response.status(401).json('erro ao actualizar usuário, tente novamente!')
        
    }
}

export const deleteUser = async (request:Request, response:Response) =>{
        const {_id} = request.params
        try {
            const deleteUserF = await user.findById({_id})
            if(!deleteUserF){
                return response.status(401).json('usuário não encontrado, temte novamente!')
            }

            await user.deleteOne({_id})
            return response.status(200).json('usuário deletado com sucesso!')
        } catch (error) {
            return response.status(401).json(error)
        }
}