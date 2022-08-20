import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CreateAccountService } from "./services/create-account.service";
import { CreateAccountDto } from "./dto/create-account.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("accounts")
@Controller("accounts")
export class AccountController {
  constructor(private readonly createAccountService: CreateAccountService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    return await this.createAccountService.execute(createAccountDto);
  }

  // @Get()
  // findAll() {
  //   return this.accountService.findAll();
  // }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.accountService.findOne(+id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateAccountDto: UpdateAccountDto) {
  //   return this.accountService.update(+id, updateAccountDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.accountService.remove(+id);
  // }
}
