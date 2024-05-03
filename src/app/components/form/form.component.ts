import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { STATIC_PARAMS } from 'src/assets/resources/static';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @ViewChild('myForm') myForm!: NgForm;

  public STATIC_PARAMS_FORM = STATIC_PARAMS.form;

  public formSubmitted = false;
  public isOpenForm: boolean = false;
  private initData: Pokemon = {
    name: '',
    num_pokemon: '',
    main_color: this.STATIC_PARAMS_FORM.color,
    generation_num: '',
    icon: '',
    type: '',
  };

  public newPokemon: Pokemon = { ...this.initData };

  constructor(private pokemonService: PokemonService) {}

  public addPokemon() {
    if (this.myForm.invalid) return;

    this.pokemonService.savePokemon(this.newPokemon).subscribe((response) => {
      if (response) {
        this.newPokemon = { ...this.initData };
        this.myForm.resetForm();
        this.toggleForm();
      } else {
        alert('Error save pokemon');
      }
    });
  }

  public toggleForm() {
    this.isOpenForm = !this.isOpenForm;
  }
}
