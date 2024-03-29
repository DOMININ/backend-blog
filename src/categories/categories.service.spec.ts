import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { CategoriesService } from './categories.service';
import { Categories } from '@prisma/client';

describe('CategoriesService', () => {
  let categoriesService: CategoriesService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: PrismaService,
          useValue: {
            categories: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    categoriesService = module.get<CategoriesService>(CategoriesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  test('should be defined', () => {
    expect(categoriesService).toBeDefined();
  });

  describe('categories', () => {
    test('should return an array of categories', async () => {
      const expectedCategories: Categories[] = [
        { id: 'tag1', name: 'Tag1' },
        { id: 'tag2', name: 'Tag2' },
      ];

      jest
        .spyOn(prismaService.categories, 'findMany')
        .mockResolvedValueOnce(expectedCategories);

      const result = await categoriesService.categories();

      expect(result).toEqual(expectedCategories);
    });
  });
});
