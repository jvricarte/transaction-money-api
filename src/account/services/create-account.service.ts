import { BadRequestException, Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateAccountDto } from "../dto/create-account.dto";
import { SafeResponseDto } from "../dto/safe-response.dto";
import { Account } from "../entities/account.entity";
import { CreateAccountRepository } from "../repositories/create-account.repository";
import { FindAccountByEmailRepository } from "../repositories/find-account-by-email.repository";
import * as bcrypt from "bcrypt";

@Injectable()
export class CreateAccountService {
  constructor(
    private readonly createAccountRepository: CreateAccountRepository,
    private readonly findAccountByEmailRepository: FindAccountByEmailRepository,
  ) {}

  async execute(dto: CreateAccountDto): Promise<SafeResponseDto> {
    const { name, email, password } = dto;
    const accountExists = await this.findAccountByEmailRepository.execute(
      email,
    );
    if (accountExists) {
      throw new BadRequestException("Account already exists");
    }
    const domain = new Account(
      randomUUID(),
      name,
      email,
      bcrypt.hashSync(password, 8),
      0,
      new Date(),
      new Date(),
    );
    const entity = domain.create();
    const response = await this.createAccountRepository.execute(entity);
    return new SafeResponseDto(response);
  }
}
