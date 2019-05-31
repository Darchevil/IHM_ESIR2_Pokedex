import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  private PokeUrl :string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=80';
  private baseSpriteUrl: string;
 

  constructor( private http: HttpClient ) { }

  getPokemon(): Observable<any> {
    return this.http.get(this.PokeUrl);
  }

  getTypePokemon(urlPoke :string): Observable<any>{
    return this.http.get(urlPoke);
  }
}
