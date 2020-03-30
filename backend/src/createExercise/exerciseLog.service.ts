import {Injectable} from '@nestjs/common';

import {ExerciseLog} from './exerciseLog.model';

@Injectable()
export class ExerciseLogsService {
  private exerciseLogs: ExerciseLog[] = [];

  insertExerciseLog(description: string, duration: number, date: Date,) {
    //const userId = new Date().toString();
    const newExerciseLog = new ExerciseLog(description, duration, date);
    this.exerciseLogs.push(newExerciseLog);
  //  return ;
  }
  fetchExerciseLogs() {
    return [...this.exerciseLogs]
  }
}
