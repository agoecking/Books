import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateBookComponent } from "./views/book/create-book/create-book.component";
import { ListBookComponent } from "./views/book/list-book/list-book.component";

import { CreateUserComponent } from "./views/user/create-user/create-user.component";
import { ListUserComponent } from "./views/user/list-user/list-user.component";

const routes: Routes = [
  {
    path: 'user',
    component: ListUserComponent,
  },
  {
    path: 'user/registerUser',
    component: CreateUserComponent,
  },

  {
    path: 'product',
    component: ListBookComponent,
  },
  {
    path: 'product/registerBook',
    component: CreateBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
