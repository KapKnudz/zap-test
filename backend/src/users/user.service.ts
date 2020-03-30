import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User} from './user.model';
import {Model} from 'mongoose';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(@InjectModel('User') private userModel: Model<User>) {}

   async insertUser(username: string) {
    //const userId = new Date().toString();
    const existingUser = this.users.find(usern => usern.username === username);
    if(existingUser ){
    return 'Username unavailable';
    }
    const newUser = new this.userModel({username});
    const result = await newUser.save();
    console.log(result);
      return result.username as string;
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

  deleteUser(username: string){
    const user = this.findUser(username)[1];
    this.users.splice(user, 1);
  }

  private async findUser(username: string): Promise <User>{
    const user = await this.userModel.findOne({username});
  //   const userIndex = this.users.findIndex(usern => usern.username === username);
  // //  console.log(userIndex);
  //   const user = this.users[userIndex];
    if(!user){
      throw new NotFoundException('Could not find user');
    }
    return user;
  }




}
