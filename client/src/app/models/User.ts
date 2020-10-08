import { Address } from './Address';

export class User {
  _id?: string;
  name: string;
  email: string;
  age: number;
  address: Address[];
  createdAt?: Date;
}
