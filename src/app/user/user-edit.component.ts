import { Component, OnInit } from '@angular/core';
import {CanDeactivate, Router} from '@angular/router';
import {ComponentCanDeactivate} from './user-edit.guard';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements ComponentCanDeactivate {
  done = false ;
  canDeactivate(): Observable<boolean> | boolean {
if (!this.done) {
  return confirm('Do you want to leave ?')  ;
}
return true;
  }

  constructor(private router: Router) { }


  onNavigate() {
    this.router.navigate(['/']);
  }

}
