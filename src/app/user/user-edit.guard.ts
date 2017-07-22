import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean> ;
}

export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate, route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate() ? component.canDeactivate() : true ;
  }

}
