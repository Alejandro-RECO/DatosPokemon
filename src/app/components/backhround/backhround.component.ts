import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon';
import { STATIC_PARAMS } from 'src/assets/resources/static';

@Component({
  selector: 'app-backhround',
  templateUrl: './backhround.component.html',
  styleUrls: ['./backhround.component.scss'],
})
export class BackhroundComponent implements OnChanges {
  @Input() public pokemon?: Pokemon | null;
  public STATIC_PARAMS = STATIC_PARAMS.background;
  public MAIN_COLOR = STATIC_PARAMS.background.predeterminated.color;

  public ngOnChanges(): void {
    if (this.pokemon) {
      this.MAIN_COLOR = this.pokemon.main_color;
    }
  }
}
