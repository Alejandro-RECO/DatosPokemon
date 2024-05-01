import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon';

@Component({
  selector: 'app-backhround',
  templateUrl: './backhround.component.html',
  styleUrls: ['./backhround.component.scss']
})
export class BackhroundComponent implements OnChanges {
 @Input() public pokemon?: Pokemon | null;

  public $color: string = '#57575a';

  public ngOnChanges(): void {
    if (this.pokemon) {
      this.$color = this.pokemon.color_principal;
    }
  }
}
