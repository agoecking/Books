import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";
import { Address } from "src/app/models/Address";
import { UserService } from "src/app/services/user.service";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  
  //address: Address = new Address();
  user: User = new User();
  address: Address = new Address();
  
  name: string;
  email: string;
  password: string;
  addresses: Address[]
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
    let id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.service.getByEmail(id).subscribe((user) => {
          console.log(this.addresses)
        this.user = user;
        this.addresses = user.address;
        
      });
    }
  }

  create(): void {
      this.user.address = this.addresses;
      console.log(this.user.address);
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
}
