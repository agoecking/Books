import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  //address: Address = new Address();
  user: User = new User();
  name: string;
  email: string;
  password: string;
  rua: string;
  bairro: string;
  numero: number;
  complemento: string;
  cep: string;

  constructor(
    private router: Router,
    private service: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get("userId");
    if (userId !== null) {
      this.service.getById(userId).subscribe((user) => {
        this.loadData(user);
      });
    }
  }

  create(): void {
    if (this.user._id == null) {
      this.service.create(this.user).subscribe((user) => {
        console.log(user);
      });
    } else {
      this.service.update(this.user).subscribe((user) => {
        console.log(user);
      });
    }
    this.router.navigate([""]);
  }

  loadData(users: User) {
    console.log(users);
    this.user = users;
  }
}
