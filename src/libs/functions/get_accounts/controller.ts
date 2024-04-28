import { Injectable, Logger } from "@nestjs/common";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { verifyToken } from "../../utils/tokens.util";

@Injectable()
export class GetAccountsController {
  constructor(private logger: Logger) {}

  async do(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> {
    try {
      this.logger.log('Get /accounts api triggered', event, context)
      const authorization = event.headers.authorization || event.headers.Authorization
      this.logger.log('Authorization header', authorization)
      const token = authorization.split(' ')[1]
      const verifiedToken = verifyToken(token)
      this.logger.log('Verified token', verifiedToken)
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          id: 1,
          name: 'Test',
        })
      }
    } catch (e) {
      this.logger.error(e)
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: e.message
        })
      }
    }

  }
}
