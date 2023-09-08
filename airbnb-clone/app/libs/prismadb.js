

const { PrismaClient } = require("@prisma/client");

global.prisma = globalThis.prisma || new PrismaClient();


if (process.env.NODE_ENV !== "production") {
  global.prisma = global.prisma;
}

module.exports = global.prisma;
