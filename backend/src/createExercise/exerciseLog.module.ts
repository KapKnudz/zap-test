import {Module} from '@nestjs/common';
import {ExerciseLogController} from './exerciseLog.controller';
import {ExerciseLogsService} from './exerciseLog.service';

@Module ({
  controllers: [ExerciseLogController],
  providers: [ExerciseLogsService],
})


export class ExerciseLogModule {}
