import { Component } from "@angular/core";
import { AuthService } from 'src/app/model/auth.service';
import { Router } from '@angular/router';

@Component({
 templateUrl: "admin.component.html"
})
export class AdminComponent {
  public selectedop="product";
  constructor(private auth: AuthService,
    private router: Router) { }
    logout() {
    this.auth.clear();
    this.router.navigateByUrl("/");
    }
    setSelectedOp(value: string){
      this.selectedop = value;
    }
}
