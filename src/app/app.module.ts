import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import {routing} from "./app.routing";
import { HomeComponent } from './home.component';
import {UserDetailGaurd} from "./user/use-detail.guard";
import {UserEditGuard} from "./user/user-edit.guard";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    UserComponent,
    UserEditComponent,
    UserDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserDetailGaurd , UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
