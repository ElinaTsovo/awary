import { Schema, model } from "mongoose";
import {post} from './postSchema'
import { user } from "./schemaUser";

const comentSchema= new Schema({
    author:{
        type:String,
        required: false
    },
    
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: false
    },
    comentt:{
        type:String,
        required: false
    },

    postComent:{
        type:Schema.Types.ObjectId,
        required:false,
        ref: 'post'
    },

}, {timestamps:true})

export const coment = model('comment', comentSchema)