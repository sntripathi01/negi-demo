import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SelectListComponent } from './select-list/select-list.component';
import { SelectBoxComponent } from './select-box/select-box.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SelectListComponent,
    SelectBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
