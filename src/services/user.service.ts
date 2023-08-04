import { Response, Request } from "express";
import { admin_auth, app } from "../configs/firebase";
import { user } from "../models/schemaUser";
import { AUTH_GUARD_USE } from "../controllers/refreshToken";

export const createUserFirebase = async(email:string, password:string) =>{
        return app.auth().createUserWithEmailAndPassword(email, password)
}

export const loginFirebase = async(email:string, password:string) =>{
    return app.auth().signInWithEmailAndPassword(email, password)
}


