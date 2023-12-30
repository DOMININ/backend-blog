import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Categories } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async categories(): Promise<Categories[]> {
    return this.prisma.categories.findMany();
  }
}
