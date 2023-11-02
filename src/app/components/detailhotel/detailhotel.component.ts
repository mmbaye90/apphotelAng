import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { IHotels } from 'src/app/models/hotels';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-detailhotel',
  templateUrl: './detailhotel.component.html',
  styleUrls: ['./detailhotel.component.css']
})
export class DetailhotelComponent implements OnInit{
  constructor(
    private route :ActivatedRoute,
    private hotelsService :HotelService,
    private router:Router
    ){}

  hotelClicked:any
  id!:number;


  ngOnInit(): void {
    this.id= Number (this.route.snapshot.paramMap.get('id'));
    this.hotelsService.getHotels().subscribe(
      (resp)=>{
          this.hotelClicked = resp.find(hotel => hotel.id == this.id)
      }
    )
  }
  goToHome(){
    this.router.navigate(['hebergement'])
  }
  showEditForm :boolean = false
  showForm(){
    this.showEditForm = true
  }
  data = new FormGroup({
    // id:new FormControl<number>(0,[]),
    hotelName:new FormControl('',[]),
    description:new FormControl('',[]),
    price : new FormControl<number>(0,[]),
    rating : new FormControl<number>(0,[]),
    imageUrl:new FormControl("",[])
  })


  modifHotel(hotelClicked:any){
    hotelClicked = {
      ...this.data.value,
      id: this.id
    }
    
    this.hotelsService.updateHotel(hotelClicked)
    .subscribe((resp)=> console.log(resp)
    )
    this.router.navigate(['/hebergement'])   
  }

  deleteHotel(hotelClicked:IHotels){
    this.hotelsService.deletehotel(hotelClicked).subscribe({
      next:()=> console.log("delete success")
    })
    this.router.navigate(['/hebergement'])   
  }

}
