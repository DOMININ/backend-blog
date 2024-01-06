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
      const dbTags = [{ tag_id: 'test', tag_name: 'Test' }];
      jest.spyOn(tagsService, 'tags').mockResolvedValue(dbTags);

      const result = await tagsController.getTags();

      const expectedResult = dbTags.map((tags) => ({
        id: tags.tag_id,
        name: tags.tag_name,
      }));
      expect(result).toEqual(expectedResult);
    });
  });
});
