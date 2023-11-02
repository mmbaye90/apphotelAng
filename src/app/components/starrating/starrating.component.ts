import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnInit{
  starwidth !:number;
  rating!:number;

  constructor(private hotelService:HotelService){}
ngOnInit(): void {
  this.hotelService.getHotels().subscribe(
    (dta)=> {
      dta.map(el =>{
        this.rating = el.rating
              
      })
    }
    
  )
}
}
