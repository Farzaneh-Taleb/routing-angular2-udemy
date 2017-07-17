import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home.component";
const APP_ROUTES: Routes =[
  // {path: 'user' , component: UserComponent } ,
  {path: 'user/:id' , component: UserComponent } ,
  {path: '' , component: HomeComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES) ;
