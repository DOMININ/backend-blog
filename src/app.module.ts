import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [PostModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
