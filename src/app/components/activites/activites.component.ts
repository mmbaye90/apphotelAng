import { Component, OnInit } from '@angular/core';
import { IHotels } from 'src/app/models/hotels';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit{
  constructor(private activiteService: HotelService){}
  //************************ LES VARIABLES GLOBALES   ********************************/

  activites :IHotels[] = [];
  one :IHotels[] = [];
  two :IHotels[] = [];
  tree :IHotels[] = [];
  four :IHotels[] = [];
  five :IHotels[] = [];
  six :IHotels[] = [];


  //********************************************************************** */
  ngOnInit(): void {
      this.activiteService.getActivites().subscribe(
        (data) => {
          this.one = data.slice(0,1);
          this.two = data.slice(1,2);
          this.tree = data.slice(2,3);
          this.four = data.slice(3,4);
          this.five = data.slice(4,5);
          this.six = data.slice(5,6);
        }
        
      )
  }
}
