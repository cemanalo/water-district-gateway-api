import { INestApplicationContext } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

export const initializeApplicationContext = async (
  applicationContext: INestApplicationContext,
  module: unknown,
): Promise<INestApplicationContext> => {
  if (applicationContext) {
    return applicationContext;
  }

  return await NestFactory.createApplicationContext(module);
};
