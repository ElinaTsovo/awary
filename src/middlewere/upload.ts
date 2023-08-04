import { NextFunction } from 'express'
import multer, { diskStorage } from 'multer'
import  Path  from 'path'
import { extname } from 'path';
import { Options } from 'multer';



export const fileOptions: Options = {
  storage: diskStorage({
    filename: (_, file, callback) => {
      const fileExtName = extname(file.originalname);
      const randomName = Array(10)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      callback(null, `${randomName}${fileExtName}`);
    },
    destination: './uploads',
  }),
  fileFilter: (_, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|pdf|doc|docx|xls|xlsx)$/)) {
      return callback(new Error('File not allowed!'));
    }
    callback(null, true);
  },
}









