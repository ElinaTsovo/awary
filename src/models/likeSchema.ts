import { Schema, model } from "mongoose";
import {coment} from './comentSchema'
import {user} from './schemaUser'

const likeSchema = new Schema({
   userID:{
    type:Schema.Types.ObjectId,
    ref: 'datauser',
    required: true
  },

  postID:{
    type:Schema.Types.ObjectId,
    required:true,
    ref: 'post'
}

}, {timestamps:true});

export const like = model('like', likeSchema)