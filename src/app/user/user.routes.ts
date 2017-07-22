import {Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail.component";
import {UserEditComponent} from "./user-edit.component";
import {UserDetailGaurd} from "./use-detail.guard";
import { UserEditGuard} from "./user-edit.guard";
export const USER_ROUTES: Routes = [

  {path: 'detail', component: UserDetailComponent , canActivate: [UserDetailGaurd]},

  { path: 'edit', component: UserEditComponent , canDeactivate: [UserEditGuard]}
];
