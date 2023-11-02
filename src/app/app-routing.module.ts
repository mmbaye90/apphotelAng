import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HebergementComponent } from './components/hebergement/hebergement.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { DetailhotelComponent } from './components/detailhotel/detailhotel.component';
import { AddhotelComponent } from './components/addhotel/addhotel.component';

const routes: Routes = [
  {path :"",component : HebergementComponent,pathMatch:"full" },
  {path :"hebergement",component :HebergementComponent},
  {path :"activites",component :ActivitesComponent},
  {path :'addhotel',component : AddhotelComponent},
  {path : "hotels/:id",component :DetailhotelComponent},
  {path : "login",component :LoginComponent},
  {path : "logout",component :LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
