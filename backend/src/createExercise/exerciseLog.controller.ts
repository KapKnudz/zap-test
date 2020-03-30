import {Controller, Post, Body, Get} from '@nestjs/common';
import {ExerciseLogsService} from './exerciseLog.service';

@Controller('create')
export class ExerciseLogController {
  constructor(private exerciseLogsService: ExerciseLogsService ) {}

    @Post()
    addExerciseLogs(
      @Body('description') description: string,
      @Body('duration') duration: number,
      @Body('date') date: Date,
    ){
      const generatedExerciseLog = this.exerciseLogsService.insertExerciseLog(description, duration, date);
      return {exerciseLog: generatedExerciseLog};

  }
  @Get()
  getAllExerciseLogs() {
    return this.exerciseLogsService.fetchExerciseLogs();
  }
}
