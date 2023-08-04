import { Schema, model } from "mongoose";
import {coment} from './comentSchema'
import {user} from './schemaUser'

const passwordSchema = new Schema({
   userID:{
    type:Schema.Types.ObjectId,
    ref: 'datauser',
    required: true
  },

  password:{
    type:String,
    min:6,
    required:true,
}

}, {timestamps:true});

export const password = model('password', passwordSchema)