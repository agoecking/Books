import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { User } from './models/User';

import { BookCreateComponent } from "./views/books/book-create/book-create.component";
import { BookListComponent } from './views/books/book-list/book-list.component'

import { UserCreateComponent } from "./views/users/users-create/user-create.component";
import{ UserListComponent} from "./views/users/users-list/user-list.component"
const routes: Routes = [
  {
    path: "user",
    component: UserListComponent,
  },
  {
    path: 'book',
    component: BookListComponent,
  },
  {
    path: 'book/register',
    component: BookCreateComponent,
  },
  {
    path: 'user/register',
    component: UserCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
