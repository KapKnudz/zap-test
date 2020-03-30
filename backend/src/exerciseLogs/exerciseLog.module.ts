import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import {ExerciseLogController} from './exerciseLog.controller';
import {ExerciseLogsService} from './exerciseLog.service';
import {ExerciseLogSchema} from './exerciseLog.model';

@Module ({
  imports: [MongooseModule.forFeature([{name: 'ExerciseLog', schema: ExerciseLogSchema}])],
  controllers: [ExerciseLogController],
  providers: [ExerciseLogsService],
})


export class ExerciseLogModule {}
