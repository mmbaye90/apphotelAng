import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentAction :any;
  
  public itemsNav :Array<any> = [
    {title:"Hebergement",route:"",icon :""},
    {title:"Activités",route:"",icon :""},
    {title:"Login",route:"",icon :""},
    {title:"Logout",route:"",icon :""}
  ]

  action :any
  setCurrention(item:any){
    this.action = item
  }
}
