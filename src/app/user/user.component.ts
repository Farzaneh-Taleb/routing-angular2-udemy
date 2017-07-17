import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

})
export class UserComponent implements OnDestroy {

  private subscription: Subscription ;
id: string ;
  constructor(private  router: Router , private activatedRow: ActivatedRoute) {

    // this.id = activatedRow.snapshot.params['id'] ;
  this.subscription =  activatedRow.params.subscribe(
      (param: any) => this.id = param['id']
    ) ;
  }
  onNavigate() {
 this.router.navigate(['/'] , {queryParams: {'analytics' : 100 }});
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
