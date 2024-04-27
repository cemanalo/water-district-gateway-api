import { INestApplicationContext } from "@nestjs/common";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import { GetAccountsModule } from "../libs/functions/get_accounts/module";
import { GetAccountsController } from "../libs/functions/get_accounts/controller";
import { initializeApplicationContext } from "../libs/utils/application.context";

let applicationContext: INestApplicationContext = null;

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event, context): Promise<APIGatewayProxyResult> => {
  const appContext = await initializeApplicationContext(
    applicationContext,
    GetAccountsModule
  );
  const controller = appContext.get(GetAccountsController);

  return await controller.do(event, context);
};
