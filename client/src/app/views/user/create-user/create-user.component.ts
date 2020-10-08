import { User } from "src/app/models/User";
import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"],
})
export class CreateUserComponent implements OnInit {

  user: User = {
    name: "Chico",
    email: "elis@regina.com",
    age: 45,
    address: [
      {
        rua: "maria maria",
        bairro: "francis",
        cep: 12345678,
        numero: 1234
      }
    ]
  };
  constructor(private service: UserService) {}

  ngOnInit(): void {}

  create(): void {
    console.log(this.user.email);
    this.service.create(this.user).subscribe((user) => {
      console.log(user);
    });
  }
}
