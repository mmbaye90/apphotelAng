import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IHotels } from '../models/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }
  private url  = "api/hotels"

  getHotels ():Observable<IHotels[]>{
    return this.http.get <IHotels[]>(this.url).pipe(
      tap(hot => hot)
    )
  }
}
