import { Address } from './Address';

export class User {
  _id?: string;
  name: string;
  password: string;
  email: string;
  address: Address[];
  createdAt?: Date;
}
