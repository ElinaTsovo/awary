import { Schema, model } from "mongoose";
import {post} from './postSchema'
import { user } from "./schemaUser";

const comentSchema= new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'datauser',
        required: true
    },
    comentt:{
        type:String,
        required: false
    },

    postID:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'post'
    },

}, {timestamps:true})

export const coment = model('comment', comentSchema)