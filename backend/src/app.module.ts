import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from './users/user.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://Kasper_hAck:hola@kaspertest-oxmda.gcp.mongodb.net/test?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
