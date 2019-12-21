import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule ,ReactiveFormsModule } from "@angular/forms";
import {CustomFormsModule} from 'ng2-validation';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';

const appRoutes: Routes = [
 { path:'' , component: HomeComponent},
 {path:'price' , component:PriceComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    FormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
