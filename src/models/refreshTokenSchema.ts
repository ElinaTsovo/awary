import { Schema, model } from "mongoose";
import {coment} from './comentSchema'
import {user} from './schemaUser'

const refreshTokenSchema = new Schema({
   userID:{
    type:Schema.Types.ObjectId,
    ref: 'datauser',
    required: true
  },

//   postID:{
//     type:Schema.Types.ObjectId,
//     required:true,
//     ref: 'post'
// },

expirisIn:{
    type:Intl,
    required:true
}

}, {timestamps:true});

export const token = model('refreshToken', refreshTokenSchema)