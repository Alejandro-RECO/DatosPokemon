import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //Variables
  pokemons = this.pokemonService.pokemonState;
  receivedIdPokemon: string = '';
  pokemonSelected = new BehaviorSubject<Pokemon | null>(null);
  fielValue: string = 'nombre';
  namePokemon: string = '';

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.initData().subscribe()
  }

  //Metodos del compomente

  //Funciones publicas
  receiveIdPokemon(id: string) {
    this.pokemonService.getPokemonById(
      id
    ).subscribe(pokemon =>{
      if(pokemon){
        this.pokemonSelected.next(pokemon)
      }
    });
  }

  public recivedSearchParams(searchParams: {
    nombre: string;
    searchType: string;
  }) {
    this.pokemonService
      .getPokemonByStartName(
        searchParams.nombre.toLowerCase(),
        searchParams.searchType.toLowerCase()
      )
      .subscribe((pokemons) => {
        if (pokemons?.length === 1) {
          this.pokemonSelected.next(pokemons[0]);
        }
      });
  }

  //Funciones Privadas
}
