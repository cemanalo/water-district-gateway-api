import { Injectable, Logger } from "@nestjs/common";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

@Injectable()
export class GetAccountsController {
  constructor(private logger: Logger) {}

  async do(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> {
    this.logger.log('Get /accounts api triggered', context)
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: 1,
        name: 'Test',
      })
    }
  }
}
