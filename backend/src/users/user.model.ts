import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},

})

export interface User {
     username: string,
  //  public unique: true,
   };
