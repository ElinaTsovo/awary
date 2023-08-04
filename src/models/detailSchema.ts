import { Schema, model } from "mongoose";

const detailsSchema = new Schema ({
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'datauser',
        required: true
    },

    contactUser: {
        type: String
      },

      cityUser: {
        type: String
      },
  
      borndayUser: {
        day:{
            type:String,
            required:true
        },
        year:{
            type: String,
            required:false
        },

        month:{
            type:String,
            required:false

        }

        
      },
  
  
}, {timestamps:true})

export const details = model('detal', detailsSchema)