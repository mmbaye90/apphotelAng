import { Component } from '@angular/core';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.css']
})
export class HebergementComponent {

  itemsFilter:Array<any>=[
    {title:"Économique",icon :"bi-cash"},
    {title:"Familial",icon :"bi-person-arms-up"},
    {title:"Romantique",icon :"bi-heart-fill"},
    {title:"Animaux Autorisés",icon :"bi-android"}
  ]

  currentAction :any;

    public setCurrentAction (action : any){
      this.currentAction = action
  }
}
