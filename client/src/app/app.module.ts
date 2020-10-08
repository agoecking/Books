import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListBookComponent } from './views/book/list-book/list-book.component';
import { CreateBookComponent } from './views/book/create-book/create-book.component';
import { ListUserComponent } from './views/user/list-user/list-user.component';
import { CreateUserComponent } from './views/user/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    CreateBookComponent,
    ListUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
