import { AccountEntity } from "../entities/account.entity";

export class SafeResponseDto {
  id: string;
  name: string;
  email: string;
  amount: number;

  constructor(data: AccountEntity) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.amount = data.amount;
  }
}
