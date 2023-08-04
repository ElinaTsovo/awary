import { NextFunction, Request, Response, request } from 'express'
import {admin_auth, app} from '../configs/firebase'
import { user } from '../models/schemaUser'
import jwt, { sign } from 'jsonwebtoken'
//antes de qualquer rota, essa será a primeira a ser chama pra ver se fez login ou não
//
export const AUTH_GUARD = async (request:any, response:Response, next:NextFunction) =>{
        const {acess_token}: any= request.headers
        try {
            const user:any = await admin_auth.verifyIdToken(acess_token)// pegar o token que vem do firebase, tem informação do user
            const uid: any = await user.uid //pegand o ouid do firebase para colocar no schema do user, isso relaciona o mongo e o uid
            request.userId = uid // cria uma var 
            return next()

        } catch (error) {
            return response.status(401).json(error)
        }
}







// export const AUTH_GUARD_USER =async (request:Request, response:Response, next:NextFunction) => {
//         const {acess_token}: any= request.headers
//         const {_id} = request.params
//         const {nameUser, emailUser, passwordUser} = request.body

//        try {
//         const user:any = await admin_auth.verifyIdToken(acess_token)// pegar o token que vem do firebase, tem informação do user
//             const uid: any = await user.uid 
//             const userExiste = await user.findFirst({ where: { emailUser } });
//             if (!userExiste) {
//               return response.status(404).json({ error: 'Usuário não encontrado.' });
//             }
//             next()
//        } catch (error) {
//         return response.status(401).json({ error: 'Falha na autenticação.', details: error });
        
//        }

//     }