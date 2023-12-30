import { ApiProperty } from '@nestjs/swagger';

export class AllCategoriesDto {
  @ApiProperty({ description: 'Category identifier', nullable: false })
  id: string;

  @ApiProperty({ description: 'Category name', nullable: false })
  name: string;
}
