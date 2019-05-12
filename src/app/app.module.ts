import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { HomeFirstGuard } from './home-first.guard';
//import { AdminModule } from './components/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "admin",
      loadChildren: "./components/admin/admin.module#AdminModule", canActivate: [HomeFirstGuard],
      },
      {path: "",component:HomeComponent},
      {path: "**",redirectTo: ""}
      
    ])
  ],
  providers: [HomeFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }