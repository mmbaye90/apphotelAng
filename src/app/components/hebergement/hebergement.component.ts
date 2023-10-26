import { Component,OnInit } from '@angular/core';
import { IHotels } from 'src/app/models/hotels';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.css']
})
export class HebergementComponent implements OnInit{

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

  //********************************** controlers affichage  **************
  constructor(private serviceHotel :HotelService){}

  hotels :IHotels[]= []
  msgErr=''
  spiner :boolean = true
  exp:IHotels[]= [];
  populaire :IHotels[] = [];
  search:string = ''


  ngOnInit(): void {
    this.serviceHotel.getHotels().subscribe({
      next : (resp) => {
        this.hotels = resp;
        this.exp = this.hotels.slice(0,6);
        this.populaire = this.hotels.filter(el => el.rating ==5)
        if (this.hotels.length >0) {
          this.spiner = false 
        }        
      },
      error : error => this.msgErr = error,
    })
  }

  voirPlusMoins :boolean = false
  afficherPlus(){
    this.voirPlusMoins = !this.voirPlusMoins
    if(this.voirPlusMoins)this.exp = this.hotels
    if(!this.voirPlusMoins) this.exp = this.hotels.slice(0,6);
    
  }
  
   searchHotel(str:string ):IHotels[]{
    const resp = this.hotels.filter(el=>el.hotelName.toLowerCase().indexOf(str.toLowerCase())!=-1)
    console.log(resp);
    
    return this.exp=resp
  }

  filteredHotel(str:string):IHotels[]{
    console.log(str.toLowerCase());
    const resp = this.hotels.filter(el=>el.description.toLowerCase().indexOf(str.toLowerCase())!=-1)
    console.log(resp);
    
    return this.exp=resp

  }

}
