import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../model/model.module";
import { HomeComponent } from "./home.component";
import { CounterDirective } from "./counter.directive";

@NgModule({
 imports: [ModelModule,
  BrowserModule,
  FormsModule
],
 declarations: [HomeComponent, CounterDirective],
 exports: [HomeComponent]
})
export class HomeModule { }