import { Injectable } from '@angular/core';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}
  //Guardar un pokemon
  savePokemon(pokemon: Pokemon): void {
    const pokemons: Pokemon[] = this.getPokemons();
    if (!pokemon.id) {
      const id = new Date().getTime().toString();
      pokemon.id = id;
    }
    pokemons.push(pokemon);
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }
  //Obtener todos los pokemones
  getPokemons(): Pokemon[] {
    const pokemonsString = localStorage.getItem('pokemons');
    return pokemonsString ? JSON.parse(pokemonsString) : [];
  }
  //Obtener un pokemon por nombre
  getPokemonByName(name: string): Pokemon | undefined {
    const pokemons = this.getPokemons();
    return pokemons.find((pokemon) => pokemon.nombre.toLowerCase() === name.toLowerCase());
  }
  //Obtenr por inicio nombre
  getPokemonByStartName(name: string, field:string): Pokemon[] {
    const pokemons: Pokemon[] = this.getPokemons();
    return pokemons.filter((pokemons) =>{
      const fieldValue = pokemons[field as keyof Pokemon]?.toLowerCase();
      return fieldValue?.startsWith(name.toLowerCase());
    });

    //return pokemons.filter((pokemon) => pokemon.nombre.toLowerCase().startsWith(name.toLowerCase()));
  }
  //Eliminar todos los pokemones
  removeAllPokemon(): void {
    localStorage.removeItem('pokemons');
  }
  //Eliminar un pokemon por id
  removePokemon(id: string): void {
    const pokemons = this.getPokemons();
    const index = pokemons.findIndex((pokemon) => pokemon.id === id);
    pokemons.splice(index, 1);
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }
}
