import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Book } from "./models/Book";
import { User } from "./models/User";

import { BookCreateComponent } from "./views/books/book-create/book-create.component";
import { BookListComponent } from "./views/books/book-list/book-list.component";

import { UserCreateComponent } from "./views/users/users-create/user-create.component";
import { UserListComponent } from "./views/users/users-list/user-list.component";
const routes: Routes = [
  //book routes
  {
    path: "book",
    component: BookListComponent,
  },
  {
    path: "book/register",
    component: BookCreateComponent,
  },
  {
    path: "book/:bookId",
    component: BookCreateComponent,
  },
  {
    path: "book/delete/:bookId",
    component: BookListComponent,
  },
  {
    path: "book/update/:bookId",
    component: BookCreateComponent,
  },

  //find book Routes
  
  {
    path: "book/findname/:bookName",
    component: BookListComponent,
  },
  {
    path: "book/findauthor/:author",
    component: BookListComponent,
  },
  {
    path: "book/findgenre/:genre",
    component: BookListComponent,
    
  },

  //user routes
  {
    path: "user/register",
    component: UserCreateComponent,
  },
  {
    path: "user",
    component: UserListComponent,
  },
  {
    path: "user/:userId",
    component: UserCreateComponent,
  },
  {
    path: "user/update/:userId",
    component: UserCreateComponent,
  },
  {
    path: "user/delete/:id",
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
