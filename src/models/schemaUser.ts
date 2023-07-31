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
      required: true,
      min: 4
    },

    emailUser: {
      field: { 
        type: String, 
        required: false,
         min: 4
         },
    },

    passwordUser: {
      type:String,
      required: true
    },

    photoprofileUser: {
      type: String,
      default: null
    },

  },{ timestamps: true });

export const user = model("datauser", SchemaUser);