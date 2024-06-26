import { Logger, Module } from "@nestjs/common";
import { GetAccountsController } from "./controller";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [Logger, GetAccountsController],
})
export class GetAccountsModule {}
