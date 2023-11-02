import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit{

  constructor(
    private hotelService :HotelService,
    private router :Router
    ){}
  ngOnInit(): void {
  }
  data = new FormGroup({
    // id:new FormControl<number>(0,[]),
    hotelName:new FormControl('',[]),
    description:new FormControl('',[]),
    price : new FormControl<number>(0,[]),
    rating : new FormControl<number>(0,[]),
    imageUrl:new FormControl("",[])
  })
  

  onSubmit(){
    this.hotelService.createHotel(this.data.value).subscribe({
      next:(resp)=> console.log(resp),
      error: (er)=>console.log(er)
    })
    this.router.navigate(["hebergement"])
  }

}
