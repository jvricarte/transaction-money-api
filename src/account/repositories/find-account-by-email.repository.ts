import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/infra/database/prisma-client.service";
import { AccountEntity } from "../entities/account.entity";

@Injectable()
export class FindAccountByEmailRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(email: string): Promise<AccountEntity> {
    return await this.prismaService.account.findFirst({
      where: { email },
    });
  }
}
