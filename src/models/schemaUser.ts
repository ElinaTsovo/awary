import { Schema, model } from "mongoose";

const SchemaUser = new Schema(
  {
    uid: {
      type: String,
      unique: true,
      required: false
    },

    nameUser: {
      type: String,
      required: false,
      min: 4
    },

    emailUser: {
        type: String, 
        required: false,
        unique:true,
         min: 4
    },

    city: {
      type:String,
      required: false
    },


    photoprofileUser: {
      type: String,
      default: null
    },

  },{ timestamps: true });

export const user = model("datauser", SchemaUser);