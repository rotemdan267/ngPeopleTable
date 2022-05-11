import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly SERVER: string = 'https://fakestoreapi.com/users';

  constructor(private _client: HttpClient) { }
  
  
  
  // GET (read)
  getPeople(): Observable<any> {
    return this._client.get<Observable<any>>(`${this.SERVER}`);
  }
  
  getPerson(id:number) : Observable<any> {
    return this._client.get<Observable<any>>(`${this.SERVER}/${id}`);
  }
  
}