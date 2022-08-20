export class Account {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private amount: number;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    amount: number,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.amount = amount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  private getInstance(): AccountEntity {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      amount: this.amount,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  create(): AccountEntity {
    return this.getInstance();
  }

  update(name: string, email: string, password: string): AccountEntity {
    this.name = name;
    this.email = email;
    this.password = password;
    this.updatedAt = new Date();
    return this.getInstance();
  }

  incrementAmount(amount: number): AccountEntity {
    this.amount += amount;
    return this.getInstance();
  }

  decrementAmount(amount: number): AccountEntity {
    this.amount -= amount;
    return this.getInstance();
  }
}

export type AccountEntity = {
  id: string;
  name: string;
  email: string;
  password: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};
