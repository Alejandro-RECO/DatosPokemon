import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
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

  ngOnInit(): void {
    // const pokemomn1: Pokemon = {
    //   nombre: 'picachu',
    //   num_pokemon: '25',
    //   color_principal: '#f6bd20',
    //   num_generacion: '1',
    //   icono_pokemon:
    //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    //   tipo_pokemon: 'electrico',
    // };
    // const pokemon2: Pokemon = {
    //   nombre: 'Bulbasure',
    //   num_pokemon: '25',
    //   color_principal: '#70ceec',
    //   num_generacion: '3',
    //   icono_pokemon:
    //     'https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png',
    //   tipo_pokemon: 'electrico',
    // };

    // this.pokemonService.savePokemon(pokemomn1);
    // this.pokemonService.savePokemon(pokemon2);
  }

  //Funciones publicas
  receiveIdPokemon(id: string) {
    this.pokemonService.getPokemonById(
      id
    ).subscribe(pokemon =>{
      console.log(pokemon);

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
