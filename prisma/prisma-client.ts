import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

// Создаем подключение к Turso
const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL as string, // URL из вашего .env
  authToken: process.env.TURSO_AUTH_TOKEN as string, // Токен из вашего .env
});

// Настроим адаптер для работы с Turso
const adapter = new PrismaLibSQL(libsql);

// Инициализация Prisma Client с адаптером
const prisma = new PrismaClient({ adapter });

export { prisma };
