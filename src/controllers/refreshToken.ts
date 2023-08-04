import { admin_auth } from "../configs/firebase";
import { user } from "../models/schemaUser";
import { Request, Response } from "express";
import { Jwt, sign } from "jsonwebtoken";

export const AUTH_GUARD_USE = async (request: Request, response: Response) => {
  const { _id } = request.params;
  const { nameUser, emailUser } = request.body;

  try {
    const refresh = await user.findById({ _id });
    if (!refresh) {
      return response.status(404).json("user not found");
    }



  } catch (error) { 
    return response.status(401).json(error)
  }
    
  
};



