import { Injectable } from '@angular/core';
import { Pokemon } from '../interface/pokemon';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemonState = new BehaviorSubject<Pokemon[] | null>(null);

  constructor() {
    this.fillWhenEmpty();
  }

  public initData(): Observable<Pokemon[]> {
    return this.getPokemons().pipe(
      tap((pokemons) => {
        this.pokemonState.next(pokemons);
      })
    );
  }

  public savePokemon(pokemon: Pokemon): Observable<boolean> {
    try {
      if (!pokemon.id) {
        const id = this.getRandomId();
        pokemon.id = id;
      }
      this.pokemonState.next([...(this.pokemonState?.value || []), pokemon]);
      this.setItemsLocalStorage();
      return of(true);
    } catch (e) {
      console.log('Error', e);
      return of(false);
    }
  }

  public getPokemons(): Observable<Pokemon[]> {
    const pokemonsString = localStorage.getItem('pokemons');

    const pokemonValues = pokemonsString ? JSON.parse(pokemonsString) : [];
    return of(pokemonValues);
  }

  public getPokemonById(id: string): Observable<Pokemon | null> {
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
  public getPokemonByStartName(
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

  private fillWhenEmpty(): void {
    const pokemonOne: Pokemon = {
      id: this.getRandomId(),
      name: 'Charmander',
      num_pokemon: '0004',
      main_color: '#ffaa3b',
      generation_num: '1',
      icon: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png',
      type: 'fuego',
    };
    const pokemonTwo: Pokemon = {
      id: this.getRandomId(),
      name: 'Bulbasaur',
      num_pokemon: '0001 ',
      main_color: '#7ccf50',
      generation_num: '1',
      icon: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/bulbasaur.png',
      type: 'planta',
    };
    const pokemonThree: Pokemon = {
      id: this.getRandomId(),
      name: 'Squirtle',
      num_pokemon: '0007 ',
      main_color: '#4bc1e4',
      generation_num: '1',
      icon: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png',
      type: 'agua',
    };

    if (localStorage.getItem('pokemons') === null) {
      this.pokemonState.next([
        ...(this.pokemonState?.value || []),
        pokemonOne,
        pokemonTwo,
        pokemonThree,
      ]);
      this.setItemsLocalStorage();
    }
  }
  private setItemsLocalStorage() {
    localStorage.setItem(
      'pokemons',
      JSON.stringify(this.pokemonState.value || [])
    );
  }
  private getRandomId(): string {
    return (Math.random() * 100).toString();
  }
}
