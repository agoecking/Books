import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Info } from "src/app/models/Info"
import { MatTableDataSource} from "@angular/material/table"

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  
  infoColumns: string[] = ["sector", "cpf"];
  infos: Info[] = [];

  infosTable: MatTableDataSource<Info> = new MatTableDataSource<Info>(
    this.infos
  )

  info: Info = new Info();

  user: User = new User();

  infoSector: string;
  infoCpf: number;
  name: string;
  email: string;
  password: string;
  

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

  addInfo(): void{
    this.info = new Info();
    this.info.cpf = this.infoCpf
    this.info.sector = this.infoSector
    this.infos.push(this.info);
  }

  create(): void {
    this.user.infos = this.infos
    if (this.user._id == null) {
      this.service.create(this.user).subscribe((user) => {
        console.log(user);
      });
    } else {
      this.service.update(this.user).subscribe((user) => {
        console.log(user);
      });
    }
    this.router.navigate(["/user"]);
  }

  loadData(users: User) {
    this.infos = users.infos
    this.user = users;
  }
}
