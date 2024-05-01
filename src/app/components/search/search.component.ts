import { Component, EventEmitter, Output } from '@angular/core';
import { placeholderContent } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

interface PokemonSearch {
  nombre: string;
  searchType: string;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private pokemonService: PokemonService){}

  @Output() private searchPokemon = new EventEmitter<PokemonSearch>();

  public namePokemon: string = '';
  public searchType: string = 'nombre';

  placeholderContent: placeholderContent = {
    nombre: 'Pikachu...',
    num_pokemon: '011...',
    num_generacion: 'Generación 1...',
    tipo_pokemon: 'Electrico...',
  }

  public searchPokemonByStartName(){
    this.searchPokemon.emit({
      nombre: this.namePokemon,
      searchType: this.searchType
    });
  }

  public addPokemon (){
    const pokemon ={
      nombre: 'Charizard',
      num_pokemon: '25',
      color_principal: '#ff9f28',
      num_generacion: '3',
      icono_pokemon:
        'https://img.pokemondb.net/sprites/scarlet-violet/normal/1x/charizard.png',
      tipo_pokemon: 'electrico',
    }

    this.pokemonService.savePokemon(pokemon)
  }
}
