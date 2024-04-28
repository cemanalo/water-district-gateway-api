import { INestApplicationContext } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SecretClientService } from "../services/secret.client.service";

type Secret = {
  key: string;
  envMapping: Record<string, string>
}

export const initializeApplicationContext = async (
  applicationContext: INestApplicationContext,
  module: unknown,
  secrets?: Secret[],
): Promise<INestApplicationContext> => {
  if (applicationContext) {
    return applicationContext;
  }

  if(secrets && secrets.length > 0) {
    const secretClient = new SecretClientService()
    const loadSecrets = secrets.map(async ({key, envMapping}) => {
      const secretValue = await secretClient.getValue(key);
      secretClient.mapToEnv(secretValue, envMapping);
    })
    await Promise.all(loadSecrets);
  }

  return await NestFactory.createApplicationContext(module);
};
