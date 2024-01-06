import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [PostModule, CategoriesModule, TagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
