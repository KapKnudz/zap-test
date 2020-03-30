import {Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';
import {UsersService} from './user.service';

@Controller('user')
export class UserController {
  constructor(private usersService: UsersService ) {}

    @Post()
    addUser(
      @Body('username') username: string,
    ){
      const generatedUsername = this.usersService.insertUser(username);
      return {username: generatedUsername};

  }
  @Get()
  async getAllUsers() {
    return this.usersService.fetchUsers();
  }
  @Get(':username')
  async getUser(@Param('username') username: string, ){
    const users = await this.usersService.fetchSingleUser(username);
    return users;
  }
  @Patch(':username')
  updateUser(
    @Param('username') username: string,
    @Body('username') newusername: string,

  ){
      this.usersService.updateUser(username, newusername);
      return null;
  }
  @Delete(':username')
  removeUser(
    @Param('username') username: string,) {
      this.usersService.deleteUser(username);
      return null;
    }

}
