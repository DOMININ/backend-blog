import { Test, TestingModule } from '@nestjs/testing';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';

jest.mock('./tags.service');

describe('TagsController', () => {
  let tagsController: TagsController;
  let tagsService: TagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagsController],
      providers: [TagsService],
    }).compile();

    tagsService = module.get<TagsService>(TagsService);
    tagsController = module.get<TagsController>(TagsController);
  });

  describe('getTags', () => {
    test('should return an array of tags', async () => {
      const dbTags = [{ id: 'test', name: 'Test' }];
      jest.spyOn(tagsService, 'tags').mockResolvedValue(dbTags);

      const result = await tagsController.getTags();

      const expectedResult = dbTags.map((tags) => ({
        id: tags.id,
        name: tags.name,
      }));
      expect(result).toEqual(expectedResult);
    });
  });
});
