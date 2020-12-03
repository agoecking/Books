import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../../services/user.service";
import { User } from "./../../../models/User";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  usersColumns: string[] = ["name", "email", "edit", "delete"];

  users: User[] = [];

  userTable: MatTableDataSource<User> = new MatTableDataSource<User>(
    this.users
  );

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.list().subscribe((list) => {
      this.users = list;
      this.userTable = new MatTableDataSource<User>(this.users);
    });
  }

  navigateToCreateUser(): void {
    this.router.navigate(["user/register"]);
  }

  delete(id: string): void {
    this.userService.delete(id).subscribe((list) => {
      this.users = list;
      this.userTable = new MatTableDataSource<User>(this.users);
    });
  }
  
}
