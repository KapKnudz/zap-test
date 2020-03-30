import * as mongoose from 'mongoose';

export const ExerciseLogSchema = new mongoose.Schema({
  username: {type: String, required: true},
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: {type: Date, required: true},

})

export interface ExerciseLog extends mongoose.Document {
     username: string,
     description: string,
     duration: number,
     date: Date,
  //  public unique: true,
   };
