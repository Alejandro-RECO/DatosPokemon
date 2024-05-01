import { Injectable } from '@angular/core';
import { Pokemon } from '../interface/pokemon';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  public pokemonState = new BehaviorSubject<Pokemon[] | null>(null);

  constructor(){
      const pokemon1: Pokemon = {
        nombre: 'picachu',
        num_pokemon: '25',
        color_principal: '#f6bd20',
        num_generacion: '1',
        icono_pokemon:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        tipo_pokemon: 'electrico',
      };
      const pokemon2: Pokemon = {
        nombre: 'Bulbasure',
        num_pokemon: '25',
        color_principal: '#70ceec',
        num_generacion: '3',
        icono_pokemon:
          'https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png',
        tipo_pokemon: 'electrico',
      };

      this.savePokemon(pokemon1)
      this.savePokemon(pokemon2)
  }

  public initData(): Observable<Pokemon[]> {
    return this.getPokemons().pipe(
      tap((pokemons) => {
        this.pokemonState.next(pokemons);
      })
    );
  }

  //Guardar un pokemon
  savePokemon(pokemon: Pokemon): void {
    this.getPokemons().subscribe((pokemons) => {
      if (!pokemon.id) {
        //create a random id
        const id = (Math.random()*100).toString()

        pokemon.id = id;
      }
      this.pokemonState.next([...this.pokemonState?.value || [],  pokemon]);
      localStorage.setItem('pokemons', JSON.stringify(this.pokemonState.value || []));
    });
  }

  //Obtener todos los pokemones
  getPokemons(): Observable<Pokemon[]> {
    const pokemonsString = localStorage.getItem('pokemons');

    const pokemonValues = pokemonsString ? JSON.parse(pokemonsString) : [];
    return of(pokemonValues);
  }

  //Obtener un pokemon por nombre
  getPokemonById(id: string): Observable<Pokemon | null> {
    return this.pokemonState.pipe(
      map((pokemons) => {
        return (
          pokemons?.find(
            (pokemon) => pokemon.id?.toLowerCase() === id.toLowerCase()
          ) || null
        );
      })
    );
  }
  //Obtenr por inicio nombre
  getPokemonByStartName(
    name: string,
    field: string
  ): Observable<Pokemon[] | null> {
    return this.getPokemons().pipe(
      map((pokemons) => {
        const result =
          pokemons?.filter((pokemons) => {
            const fieldValue = pokemons[field as keyof Pokemon]?.toLowerCase();
            return fieldValue?.startsWith(name.toLowerCase());
          }) || null;
        this.pokemonState.next(result);
        return result;
      })
    );
  }
  //Eliminar todos los pokemones
  removeAllPokemon(): void {
    localStorage.removeItem('pokemons');
  }
  //Eliminar un pokemon por id
  removePokemon(id: string): void {
    this.pokemonState.subscribe((pokemons) => {
      const index = pokemons?.findIndex((pokemon) => pokemon.id === id);
      if (index) {
        pokemons?.splice(index, 1);
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
      }
    });
  }
}
