import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { User } from "./users.entity";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    index(): Promise<User[]> {
      return this.usersService.findAll();
    }
    
    @Get(':id')
    async getByID(@Param('id') id): Promise<any> {
        return this.usersService.getById(id);
    } 

    @Post()
    async create(@Body() usersData: User): Promise<any> {
      return this.usersService.create(usersData);
    }  

    @Put(':id')
    async update(@Param('id') id, @Body() usersData: User): Promise<any> {
        usersData.id = String(id);
        console.log('Update #' + usersData.id)
        return this.usersService.update(usersData);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.usersService.delete(id);
    } 
}