import { Address } from "./Address";

export class User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  address: Address[];
}
