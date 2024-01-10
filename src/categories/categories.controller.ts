import { Controller, Get, HttpStatus } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AllCategoriesDto } from './categories.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: AllCategoriesDto,
    isArray: true,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  async getCategories(): Promise<AllCategoriesDto[]> {
    const dbCategories = await this.categoriesService.categories();
    return dbCategories.map((category) => ({
      id: category.id,
      name: category.name,
    }));
  }
}
