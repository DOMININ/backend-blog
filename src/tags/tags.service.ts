import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Tags } from '@prisma/client';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async tags(): Promise<Tags[]> {
    return this.prisma.tags.findMany();
  }
}
