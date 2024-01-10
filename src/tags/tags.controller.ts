import { Controller, Get, HttpStatus } from '@nestjs/common';
import { TagsService } from './tags.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AllTagsDto } from './tags.dto';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: AllTagsDto,
    isArray: true,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  async getTags(): Promise<AllTagsDto[]> {
    const dbTags = await this.tagsService.tags();
    return dbTags.map((tags) => ({
      id: tags.id,
      name: tags.name,
    }));
  }
}
