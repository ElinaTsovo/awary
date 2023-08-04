import { Schema, model } from "mongoose";
import {coment} from './comentSchema'
import {user} from './schemaUser'

const postSchema = new Schema({
   userID:{
    type:Schema.Types.ObjectId,
    ref: 'datauser',
    required: true
  },

  postTitle: {
    type: String,
    required: true,
  },

  postPhoto: {
    type: String,
    required: true,
  },

  likesCouter:{
    type:Number,
    min:0,
    default:0,
    required:false
  }

}, {timestamps:true});

export const post = model('post', postSchema)