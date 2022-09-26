import { Component, OnInit } from '@angular/core';
import { AllPokemons } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemonList',
  templateUrl: './pokemonList.component.html',
})
export class PokemonListComponent implements OnInit {
  
  counter: number = 1;
  allPokemonsList!: AllPokemons;

  constructor(private pkmnService: PokemonService){}

  ngOnInit(): void {
    this.callPokemons();
  }

  async callPokemons(){
    this.pkmnService.getAllPokemons(0)
    .subscribe( (res: AllPokemons) => {
      this.allPokemonsList = res;      
    })
  }

  nextPokemons(){
    this.pkmnService.getAllPokemons(20*this.counter)
    .subscribe( (res: AllPokemons) => {
      this.allPokemonsList= res
      console.log(this.allPokemonsList);
    })
    this.counter++;
  }

  prevPokemons(){
    this.counter--;
    this.pkmnService.getAllPokemons(20*this.counter)
    .subscribe( (res: AllPokemons) => {
      this.allPokemonsList.results = res.results
      console.log(this.allPokemonsList);
      
    })
  }

}
