import { Info } from "./Info";

export class User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  infos: Info[];
}
