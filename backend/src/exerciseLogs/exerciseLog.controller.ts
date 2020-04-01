import {Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';
import {ExerciseLogsService} from './exerciseLog.service';

@Controller('exerciseLogs')
export class ExerciseLogController {
  constructor(private exerciseLogsService: ExerciseLogsService ) {}

    @Post('add')
    async addExerciseLog(
      @Body('username') username: string,
      @Body('description') description: string,
      @Body('duration') duration: number,
      @Body('date') date: Date,
    ){
      const generatedExerciseLog = await this.exerciseLogsService.insertExerciseLog(username, description, duration, date);
      return {generatedExerciseLog};

}

  @Get()
  async getAllExerciseLogs() {
    return await this.exerciseLogsService.fetchExerciseLogs();
  }
//Might need to be able to fetch all Logs with username x
//Fetches Log by Username, might want to fetch by date/description
  @Get(':username')
  async getExerciseLog(@Param('username') username: string, ){
    const exerciseLog = await this.exerciseLogsService.fetchSingleExerciseLog(username);
    return exerciseLog;

  }
  @Patch(':username')
  async updateExerciseLog(
    @Param('username') username: string,
    @Body('username') newusername: string,
    @Body('description') description: string,
    @Body('duration') duration: number,
    @Body('date') date: Date,

  ){
    await this.exerciseLogsService.updateExerciseLog(username, newusername, description, duration, date);
      return null;
  }

  @Delete(':username')
  async removeExerciseLog(
    @Param('username') username: string,) {
      await this.exerciseLogsService.deleteExerciseLog(username);
      return null;
    }


}
