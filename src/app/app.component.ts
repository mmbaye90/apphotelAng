import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentAction :any;
  
  public itemsNav :Array<any> = [
    {title:"Hebergement",route:"/hebergement",icon :""},
    {title:"Activités",route:"/activites",icon :""},
    {title:"Login",route:"/login",icon :""},
    {title:"Logout",route:"/logout",icon :""}
  ]

  action :any
  setCurrention(item:any){
    this.action = item
  }
}
