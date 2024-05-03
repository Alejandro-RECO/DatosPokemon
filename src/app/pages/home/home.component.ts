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
  public pokemons = this.pokemonService.pokemonState;
  public receivedIdPokemon: string = '';
  public pokemonSelected = new BehaviorSubject<Pokemon | null>(null);
  public searchType: string = 'nombre';
  public namePokemon: string = '';

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.initData().subscribe();
  }

  public receiveIdPokemon(id: string) {
    this.pokemonService.getPokemonById(id).subscribe((pokemon) => {
      if (pokemon) {
        this.pokemonSelected.next(pokemon);
      }
    });
  }

  public recivedSearchParams(searchParams: {
    name: string;
    searchType: string;
  }) {
    this.pokemonService
      .getPokemonByStartName(
        searchParams.name.toLowerCase(),
        searchParams.searchType.toLowerCase()
      )
      .subscribe((pokemons) => {
        if (pokemons?.length === 1) {
          this.pokemonSelected.next(pokemons[0]);
        }
      });
  }
}
