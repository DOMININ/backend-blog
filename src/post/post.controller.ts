import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('posts')
  async getPosts(): Promise<PostModel[]> {
    return this.postService.posts({});
  }

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }
}
