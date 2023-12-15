import { parseArgs } from 'node:util';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const options = {
  environment: { type: 'string' } as const,
};

async function main() {
  const {
    values: { environment },
  } = parseArgs({ options });

  switch (environment) {
    case 'categories':
      await prisma.categories.createMany({
        data: [
          { category_id: 'programming', category_name: 'Programming' },
          { category_id: 'life', category_name: 'My life' },
          { category_id: 'education', category_name: 'Education' },
        ],
      });
      break;
    case 'tags':
      await prisma.tags.createMany({
        data: [
          { tag_id: 'react', tag_name: 'React' },
          { tag_id: 'javascript', tag_name: 'JavaScript' },
          { tag_id: 'typescript', tag_name: 'TypeScript' },
        ],
      });
      break;
    default:
      break;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
