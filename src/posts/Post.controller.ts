import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { CreatePostDto } from "./dtos/CreatePost.dto";
import { PostService } from "./Post.service";

@Controller("posts")
export class PostController {
 
    constructor(private postService: PostService){}

    @Post()
    @UsePipes(new ValidationPipe)
    createPost(@Body() createPostDto: CreatePostDto){
        return this.postService.createPost(createPostDto)
    }
    
}