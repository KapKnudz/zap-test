import {Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';
import {UsersService} from './user.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UsersService ) {}

    @Post('add')
  async addUser(
      @Body('username') username: string,
    ){
      const generatedUsername = await this.usersService.insertUser(username);
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
  async updateUser(
    @Param('username') username: string,
    @Body('username') newusername: string,

  ){
    await this.usersService.updateUser(username, newusername);
      return null;
  }
  @Delete(':username')
  async removeUser(
    @Param('username') username: string,) {
      await this.usersService.deleteUser(username);
      return null;
    }

}
