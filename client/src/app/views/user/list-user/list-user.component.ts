import { User } from './../../../models/User';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
})

export class ListUserComponent implements OnInit {

  users: User[] = [];
  
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.list().subscribe((list) => {
      console.log(list);
      this.users = list;
    });
  }

  navigateToCreateUser(): void {
    this.router.navigate(["user/create"]);
  }
}
