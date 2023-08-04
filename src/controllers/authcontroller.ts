import { auth } from "firebase-admin";
import { user } from "../models/schemaUser";
import {  Request, Response} from "express";
import { Jwt } from "jsonwebtoken";


const AUTH_GUARD_USE = async (request:Request, response:Response) =>{
            const {_id} = request.params
            const {nameUser,emailUser} = request.body
        try {
            
        } catch (error) {
            
        }
}