import { Request, Response, request } from 'express'
import  Jwt  from 'jsonwebtoken'
import {user} from '../models/schemaUser';
import { password } from '../models/passwordSchema';
import bcrypt from 'bcrypt'
import { createUserFirebase , loginFirebase} from '../services/user.service'
import { admin_auth } from '../configs/firebase'

export const createUser = async (request:Request, response:Response) =>{
        const {nameUser, emailUser, passwordUser,photoprofileUser,city,} = request.body
        if (!nameUser){
            return response.status(422).json({ msg: " name required" });
        }

        if (!emailUser) {
            return response.status(422).json({ msg: " email required" });
          }

          if (!passwordUser) {
            return response.status(422).json({ msg: " password required" });
          }

          const encryptedpasswordhash = await bcrypt.hash(passwordUser, 12);

        try {
            const usuario = await createUserFirebase(emailUser, passwordUser)

            const createUserF = await user.create({
                nameUser,
                emailUser,
                uid:usuario.user?.uid,
                photoprofileUser:usuario.user?.photoURL
    
            })

            return response.status(200).json('user created ')
        } catch (error) {
            console.log(error)
            return response.status(401).json(error)    
        }
       
}



export const loginUser = async(request:Request, response:Response) =>{
        const {emailUser, password} = request.body
        
        if (!emailUser) {
            return response.status(422).json({ msg: "email is required" });
          }
        
          if (!password ) {
            return response.status(422).json({ msg: "a password is requiredrs" });
          }
          
          const utilizador = await user.findOne({ emailUser });
          console.log(utilizador)
          //console.log(utilizador?.passwordUser)
          if (!utilizador) {
            return response.status(404).json({ msg: "User not found" });
          }
        
          const checkpassword = await bcrypt.compare(password, utilizador.password);
          if (!checkpassword) {
            return response.status(404).json({ msg: "Invalid password" });
          }
        

        try {
           const loginUserF = await loginFirebase(emailUser, passwordUser)

           const secret = process.env.TOKEN_KEY!
           const token = Jwt.sign({
           _id:utilizador._id,
   
        }, `${secret}`, {expiresIn: 1000})  
       return response.status(200).json(`autenticacao realizada com sucesso, ${token}`);
           
            //return response.status(200).json(loginUserF)
        } catch (error) {
            return response.status(401).json(error)
            
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




export const uploadimage = async (request:Request, response:Response) =>{
          
}