import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {ExerciseLog} from './exerciseLog.model';
import {Model} from 'mongoose';

@Injectable()
export class ExerciseLogsService {
  private exerciseLogs: ExerciseLog[] = [];

  constructor(@InjectModel('ExerciseLog') private exerciseLogModel: Model<ExerciseLog>) {}

  async insertExerciseLog(username: string, description: string, duration: number, date: Date,) {
    let result;
    try{
      const newExerciseLog = new this.exerciseLogModel({username, description, duration, date});
      const result = await newExerciseLog.save();
      console.log(result);

      return result;
    }catch(error){
      throw new NotFoundException('This log already exists!')
    }

 //  console.log(result);

 }


 async fetchExerciseLogs() {
   const exerciseLog = await this.exerciseLogModel.find();
   return exerciseLog as ExerciseLog[];
}

  async fetchSingleExerciseLog(username) {
    const exerciseLog = await this.findExerciseLog(username);
    return exerciseLog;
}
  async updateExerciseLog(username: string, newusername: string, description: string, duration: number, date: Date){
    const updatedExerciseLog = await this.findExerciseLog(username);
      if(newusername){
        updatedExerciseLog.username = newusername;
      }
      if(description){
        updatedExerciseLog.description = description;
      }
      if(duration){
        updatedExerciseLog.duration = duration;
      }
      if(date){
        updatedExerciseLog.date = date;
      }
    //Add if statements for added username props
    updatedExerciseLog.save();
  }

  async deleteExerciseLog(username: string){
    await this.exerciseLogModel.deleteOne({username: username}).exec();
  }

  private async findExerciseLog(username: string): Promise <ExerciseLog>{
    let exerciseLog;
    try {
       exerciseLog = await this.exerciseLogModel.findOne({username}).exec();
          } catch(error){
      throw new NotFoundException('Could not find exercise log');
    }
    if(!exerciseLog){
      throw new NotFoundException('Could not find exercise log');
      }
    return exerciseLog;
    }
}
