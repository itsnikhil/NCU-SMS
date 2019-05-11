import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != HomeComponent) {
        this.router.navigateByUrl("/");
        return false;
      }
    }
    return true;
  }
}
