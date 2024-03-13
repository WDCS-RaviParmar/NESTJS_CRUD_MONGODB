import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "src/schemas/Post.schema";
import { PostService } from "./Post.service";
import {PostController} from "./Post.controller"
import { User, UserSchema } from "src/schemas/User.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Post.name,
                schema: PostSchema
            },
            {
                name: User.name,
                schema: UserSchema
            }
        ])
    ],
    controllers: [PostController],
    providers: [PostService]
})
export class PostModule{

}