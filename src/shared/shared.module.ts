import { Module } from "@nestjs/common";
import { PrismaService } from "./infra/database/prisma-client.service";

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class SharedModule {}
