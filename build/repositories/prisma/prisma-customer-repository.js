"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/repositories/prisma/prisma-customer-repository.ts
var prisma_customer_repository_exports = {};
__export(prisma_customer_repository_exports, {
  PrismaCustomerRepository: () => PrismaCustomerRepository
});
module.exports = __toCommonJS(prisma_customer_repository_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/repositories/prisma/prisma-customer-repository.ts
var PrismaCustomerRepository = class {
  async create(data) {
    const customer = await prisma.customer.create({ data });
    return customer;
  }
  async findMany() {
    return prisma.customer.findMany();
  }
  async findManyByName(name) {
    return prisma.customer.findMany({ where: { name } });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrismaCustomerRepository
});
