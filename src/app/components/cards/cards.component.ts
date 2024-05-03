import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { STATIC_PARAMS } from 'src/assets/resources/static';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnChanges {
  public MAIN_COLOR = STATIC_PARAMS.cards.color;
  
  @Input() public pokemon?: Pokemon;

  @Output() public eventIdPokemon = new EventEmitter<string>();

  constructor(private PokemonService: PokemonService) {}

  public ngOnChanges(): void {
    if (this.pokemon) {
      this.MAIN_COLOR = this.pokemon.main_color;
    }
  }
}
