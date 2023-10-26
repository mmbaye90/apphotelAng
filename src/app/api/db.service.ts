import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { hotels } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService{

  createDb(){
    return {hotels}
  }
}
