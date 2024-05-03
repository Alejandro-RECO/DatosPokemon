import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonSearch, placeholderContent } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { STATIC_PARAMS } from 'src/assets/resources/static';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public namePokemon: string = '';
  public searchType: string = 'name';
  public STATIC_PARAMS_SELECT = STATIC_PARAMS.placeholders.search.select;
  @Output() private searchPokemon = new EventEmitter<PokemonSearch>();

  constructor(private pokemonService: PokemonService) {}

  public placeholderContent: placeholderContent = {
    name: STATIC_PARAMS.placeholders.search.input.name,
    num_pokemon: STATIC_PARAMS.placeholders.search.input.num_pokemon,
    generation_num: STATIC_PARAMS.placeholders.search.input.generation_num,
    type: STATIC_PARAMS.placeholders.search.input.type,
  };

  public searchPokemonByStartName() {
    this.searchPokemon.emit({
      name: this.namePokemon,
      searchType: this.searchType,
    });
  }
}
