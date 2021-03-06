import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
//import {MongooseModule} from '@types/mongoose'
import {UserController} from './user.controller';
import {UsersService} from './user.service';
import {UserSchema} from './user.model';


@Module ({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  controllers: [UserController],
  providers: [UsersService],
})


export class UserModule {}
