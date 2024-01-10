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
          { id: 'programming', name: 'Programming' },
          { id: 'life', name: 'My life' },
          { id: 'education', name: 'Education' },
        ],
      });
      break;
    case 'tags':
      await prisma.tags.createMany({
        data: [
          { id: 'react', name: 'React' },
          { id: 'javascript', name: 'JavaScript' },
          { id: 'typescript', name: 'TypeScript' },
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
