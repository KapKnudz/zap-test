import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
//import {InjectModule} from '@types/mongoose'
import {User} from './user.model';
import {Model} from 'mongoose';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(@InjectModel('User') private userModel: Model<User>) {}

   async insertUser(username: string) {
    //const userId = new Date().toString();
    // try {
    //   const user = this.userModel.findOne({username}).exec();
    //  } catch(error){
    // throw new NotFoundException('Username unavailable');
  //  }
  let result;
  try{
    const newUser = new this.userModel({username});
    const result = await newUser.save();
    return result.username as string;
  }catch(error){
    throw new NotFoundException('Username already exists!')
  }

  //  console.log(result);

  }
    async fetchUsers() {
    const users = await this.userModel.find();
  //  console.log(result);
    return users as User[];
  }
  async fetchSingleUser(username) {
    const user = await this.findUser(username);
    return user;
  }
  async updateUser(username: string, newusername: string){
    const updatedUser = await this.findUser(username);
    if(newusername){
      updatedUser.username = newusername;
    }
    //Add if statements for added username props
    updatedUser.save();
  }

  async deleteUser(username: string){
    await this.userModel.deleteOne({username: username}).exec();
    // const user = this.findUser(username)[1];
    // this.users.splice(user, 1);
  }

  private async findUser(username: string): Promise <User>{
    let user;
    try {
       user = await this.userModel.findOne({username}).exec();
  //   const userIndex = this.users.findIndex(usern => usern.username === username);
  // //  console.log(userIndex);
  //   const user = this.users[userIndex];
          } catch(error){
      throw new NotFoundException('Could not find user');
    }
    if(!user){
      throw new NotFoundException('Could not find user');
      }
    return user;
  }




}
