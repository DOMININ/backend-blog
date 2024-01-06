import { ApiProperty } from '@nestjs/swagger';

export class AllTagsDto {
  @ApiProperty({ description: 'Tag identifier', nullable: false })
  id: string;

  @ApiProperty({ description: 'Tag name', nullable: false })
  name: string;
}
