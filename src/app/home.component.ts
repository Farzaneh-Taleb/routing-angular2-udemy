import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription ;
  param: string ;
  ngOnDestroy(): void {
    this.subscription.unsubscribe() ;
  }

constructor(router: Router) {
this.subscription = router.routerState.root.queryParams.subscribe(
  (queryParam: any) => this.param = queryParam['analytics']
);
}

}
