import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HebergementComponent } from './components/hebergement/hebergement.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { LoginComponent } from './components/login/login.component';
import { HotellistComponent } from './components/hotellist/hotellist.component';

@NgModule({
  declarations: [
    AppComponent,
    HebergementComponent,
    ActivitesComponent,
    LoginComponent,
    HotellistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
