import { Test, TestingModule } from '@nestjs/testing';
import { TagsService } from './tags.service';
import { PrismaService } from '../prisma.service';
import { Tags } from '@prisma/client';

describe('TagsService', () => {
  let tagsService: TagsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TagsService,
        {
          provide: PrismaService,
          useValue: {
            tags: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    tagsService = module.get<TagsService>(TagsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  test('should be defined', () => {
    expect(tagsService).toBeDefined();
  });

  describe('tags', () => {
    test('should return an array of tags', async () => {
      const expectedTags: Tags[] = [
        { id: 'tag1', name: 'Tag1' },
        { id: 'tag2', name: 'Tag2' },
      ];

      jest
        .spyOn(prismaService.tags, 'findMany')
        .mockResolvedValueOnce(expectedTags);

      const result = await tagsService.tags();

      expect(result).toEqual(expectedTags);
    });
  });
});
