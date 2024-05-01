import { Component } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public newPokemon: Pokemon = {
    nombre: '',
    num_pokemon: '',
    color_principal: '',
    num_generacion: '',
    icono_pokemon: '',
    tipo_pokemon: '',
  };

  public isOpenForm: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  public addPokemon() {
    if (!this.newPokemon.nombre) return;
    if (!this.newPokemon.num_pokemon) return;
    if (!this.newPokemon.num_generacion) return;
    if (!this.newPokemon.color_principal) return;
    if (!this.newPokemon.icono_pokemon) return;
    if (!this.newPokemon.tipo_pokemon) return;

    this.pokemonService.savePokemon(this.newPokemon);

    this.newPokemon = {
      nombre: '',
      num_pokemon: '',
      color_principal: '',
      num_generacion: '',
      icono_pokemon: '',
      tipo_pokemon: '',
    };

    this.toggleForm();
  }

  public toggleForm() {
    this.isOpenForm = !this.isOpenForm;

  }
}
