import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import { MatFormFieldModule} from '@angular/material/form-field'
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select'

import {BookCreateComponent} from './views/books/book-create/book-create.component';
import {UserCreateComponent} from "./views/users/users-create/user-create.component"
import {BookListComponent} from "./views/books/book-list/book-list.component"
import{HeaderComponent} from "./template/header/header.component";
import { NavComponent } from './template/nav/nav.component';
import {UserListComponent} from "./views/users/users-list/user-list.component"
import {FooterComponent} from "./template/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    BookCreateComponent,
    UserCreateComponent,
    HeaderComponent,
    BookListComponent,
    NavComponent,
    UserListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
