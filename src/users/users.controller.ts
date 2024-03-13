import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/createUsers.dto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/updateUsers.dto";

@Controller("users")
export class UsersController{
    constructor(private userService: UserService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto){
        // console.log(createUserDto);
        return this.userService.createUser(createUserDto);
    }

    @Get()
    getAllUser(){
        return this.userService.getUsers()
    }

    @Get(":id")
    async getUserById(@Param("id") id: string){
        const isValidObjId = mongoose.isValidObjectId(id)
        if(!isValidObjId) throw new NotFoundException("User Not Found")
        const findUser = await this.userService.getUserById(id)
        if(!findUser) throw new NotFoundException("User Not Found")
        return findUser
    }

    @Patch(":id")
    @UsePipes(new ValidationPipe())
    async updateUser(@Param("id") id:string, @Body() updateUserDto: UpdateUserDto){
        const isValidObjectId = mongoose.isValidObjectId(id);
        if(!isValidObjectId) throw new HttpException("Invalid Id", 400)
        const updateUser = await this.userService.updateUser(id, updateUserDto)
        if(!updateUser) throw new HttpException("User Not Found", 404)
        return updateUser
    }

    @Delete(":id")
    async deleteUser(@Param("id") id: string){
        const isValidObjectId = mongoose.isValidObjectId(id)
        if(!isValidObjectId) throw new HttpException("Invalid Id", 400)
        const deleteUser = await this.userService.deleteUser(id)
        if(!deleteUser) throw new HttpException("User Not Found", 404)
        return "User Deleted Successfully";
    }

}