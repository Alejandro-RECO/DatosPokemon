import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent{

  constructor(private PokemonService: PokemonService) { }
  @Input() pokemon?: Pokemon;
  @Output() eventIdPokemon = new EventEmitter<string>();
}
