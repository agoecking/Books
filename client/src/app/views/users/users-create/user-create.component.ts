import { Component, OnInit} from "@angular/core";
import { User } from "src/app/models/User";
import { Address } from "src/app/models/Address";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-user-create",
    templateUrl: "./user-create.component.html",
    styleUrls: ["./user-create.component.css"],
})

export class UserCreateComponent implements OnInit{

    

    ngOnInit(): void{}
}