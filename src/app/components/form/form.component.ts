import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @ViewChild('myForm') myForm!: NgForm;

  public formSubmitted = false;
  public isOpenForm: boolean = false;

  public newPokemon: Pokemon = {
    nombre: '',
    num_pokemon: '',
    color_principal: '#f6bd20',
    num_generacion: '',
    icono_pokemon: '',
    tipo_pokemon: '',
  };

  constructor(private pokemonService: PokemonService) {}

  public addPokemon() {
    if (this.myForm.invalid) return;

    this.pokemonService.savePokemon(this.newPokemon);
    this.newPokemon = {
      nombre: '',
      num_pokemon: '',
      color_principal: '#f6bd20',
      num_generacion: '',
      icono_pokemon: '',
      tipo_pokemon: '',
    };

    this.myForm.resetForm();
    this.toggleForm();
  }

  public toggleForm() {
    this.isOpenForm = !this.isOpenForm;
  }
}

