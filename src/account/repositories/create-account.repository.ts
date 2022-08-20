import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/infra/database/prisma-client.service";
import { AccountEntity } from "../entities/account.entity";

@Injectable()
export class CreateAccountRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(entity: AccountEntity): Promise<AccountEntity> {
    return await this.prismaService.account.create({
      data: entity,
    });
  }
}
