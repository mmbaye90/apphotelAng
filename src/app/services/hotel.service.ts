import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IHotels } from '../models/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }
  private url_hebergement  = "api/hotels";
  private url_activites = "api/activites"

  getHotels ():Observable<IHotels[]>{
    return this.http.get <IHotels[]>(this.url_hebergement).pipe(
      tap(hot => hot)
    )
  }

  getActivites():Observable<IHotels[]>{

    return this.http.get<IHotels []>(this.url_activites).pipe(
      tap(activites => activites)
    )
  }

  public createHotel(hotel :object): Observable<IHotels> {
    hotel = {
      ...hotel,
    };
    return this.http.post<IHotels>(this.url_hebergement, hotel)
  }

  updateHotel(hotel:IHotels):Observable<IHotels>{
    return this.http.put<IHotels>(this.url_hebergement,hotel).pipe(
      tap(resp => console.log(resp)
      )
    )
  }

  deletehotel(hotel:IHotels):Observable<IHotels>{
    return this.http.delete<IHotels>(`${this.url_hebergement}/${hotel}`).pipe(
      tap(() => console.log("delete")
      )
    )
  }


}