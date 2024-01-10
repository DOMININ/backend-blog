import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

jest.mock('./categories.service');

describe('CategoriesController', () => {
  let categoriesController: CategoriesController;
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService],
    }).compile();

    categoriesService = module.get<CategoriesService>(CategoriesService);
    categoriesController =
      module.get<CategoriesController>(CategoriesController);
  });

  describe('getTags', () => {
    test('should return an array of categories', async () => {
      const dbCategories = [{ id: 'test', name: 'Test1' }];
      jest
        .spyOn(categoriesService, 'categories')
        .mockResolvedValue(dbCategories);

      const result = await categoriesController.getCategories();

      const expectedResult = dbCategories.map((category) => ({
        id: category.id,
        name: category.name,
      }));
      expect(result).toEqual(expectedResult);
    });
  });
});
