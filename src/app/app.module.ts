import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HebergementComponent } from './components/hebergement/hebergement.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbService } from './api/db.service';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailhotelComponent } from './components/detailhotel/detailhotel.component';
import { AddhotelComponent } from './components/addhotel/addhotel.component';
import { StarratingComponent } from './components/starrating/starrating.component';

@NgModule({
  declarations: [
    AppComponent,
    HebergementComponent,
    ActivitesComponent,
    LoginComponent,
    LogoutComponent,
    DetailhotelComponent,
    AddhotelComponent,
    StarratingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DbService,{delay :300}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
