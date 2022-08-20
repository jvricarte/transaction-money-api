import { Module } from "@nestjs/common";
import { AccountModule } from "./account/account.module";
import { SharedModule } from "./shared/shared.module";

@Module({
  imports: [AccountModule, SharedModule],
  controllers: [],
  providers: [],
  exports: [SharedModule],
})
export class AppModule {}
