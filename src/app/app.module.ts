import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { HomeFirstGuard } from './home-first.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartSummaryComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "admin",component:AdminComponent, canActivate: [HomeFirstGuard]},
      {path: "",component:HomeComponent, canActivate: [HomeFirstGuard]},
      {path: "**",redirectTo: ""}
    ])
  ],
  providers: [HomeFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }