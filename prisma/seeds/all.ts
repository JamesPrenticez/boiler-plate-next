import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { users } from './1-users';

async function main() {
  for (let i = 0; i < users.length; i++) {
    const item = users[i];
    await prisma.user.upsert({
      where: { email: item.email },
      update: {},
      create: {
        ...item,
      },
    });
  }

  const fetchedUsers = await prisma.user.findMany();
  console.log(fetchedUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });