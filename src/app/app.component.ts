import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './interface/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // constructor(private PokemonService: PokemonService) {}

  // pokemons?: Pokemon[];
  // namePokemon: string = '';
  // fielValue: string = 'nombre';

  // ngOnInit(): void {
  //   this.pokemons = this.PokemonService.getPokemons();
  // }
  // newPokemon: Pokemon = {
  //   nombre: '',
  //   num_pokemon: '',
  //   color_principal: '',
  //   num_generacion: '',
  //   icono_pokemon: '',
  //   tipo_pokemon: '',
  // };

  // insertPokemon(): void {
  //   if (!this.newPokemon.nombre) return;
  //   if (!this.newPokemon.num_pokemon) return;
  //   if (!this.newPokemon.num_generacion) return;
  //   if (!this.newPokemon.icono_pokemon) return;
  //   if (!this.newPokemon.tipo_pokemon) return;

  //   this.PokemonService.savePokemon(this.newPokemon);
  //   this.pokemons = this.PokemonService.getPokemons();

  //   this.newPokemon = {
  //     nombre: '',
  //     num_pokemon: '',
  //     color_principal: '',
  //     num_generacion: '',
  //     icono_pokemon: '',
  //     tipo_pokemon: '',
  //   };
  // }
  // searchPokemonByName(): void {
  //   this.pokemons = this.PokemonService.getPokemonByStartName(
  //     this.namePokemon.toLowerCase(),
  //     this.fielValue.toLowerCase()
  //   );
  // }

  // deleteAllPokemon(): void {
  //   if (this.pokemons?.length === 0) return;
  //   if (!confirm('¿Estás seguro de eliminar todos los pokemones?')) return;
  //   this.PokemonService.removeAllPokemon();
  //   this.pokemons = this.PokemonService.getPokemons();
  // }
  // deletePokemonId(id: string): void {
  //   if (this.pokemons?.length === 0) return;
  //   if (!confirm('¿Estás seguro de eliminar este pokemon?')) return;
  //   this.PokemonService.removePokemon(id);
  //   this.pokemons = this.PokemonService.getPokemons();
  // }
}
