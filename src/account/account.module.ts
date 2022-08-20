import { Module } from "@nestjs/common";
import { AccountController } from "./account.controller";
import { CreateAccountService } from "./services/create-account.service";
import { CreateAccountRepository } from "./repositories/create-account.repository";
import { SharedModule } from "src/shared/shared.module";
import { FindAccountByEmailRepository } from "./repositories/find-account-by-email.repository";

@Module({
  imports: [SharedModule],
  controllers: [AccountController],
  providers: [
    CreateAccountService,
    CreateAccountRepository,
    FindAccountByEmailRepository,
  ],
})
export class AccountModule {}
