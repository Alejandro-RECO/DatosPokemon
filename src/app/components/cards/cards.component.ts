import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnChanges{

  public color: string = '#f2be20';


  constructor(private PokemonService: PokemonService) { }
  @Input() pokemon?: Pokemon;
  @Output() eventIdPokemon = new EventEmitter<string>();

  public ngOnChanges(): void {
    if (this.pokemon) {
      this.color = this.pokemon.color_principal;
    }
  }
}
