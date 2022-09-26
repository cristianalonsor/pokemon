import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllPokemons } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getAllPokemons(from: number){
    return this.http.get<AllPokemons>(`${this.BASE_URL}/?offset=${from}&limit=20`);
  }
}
