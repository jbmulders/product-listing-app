import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct, IStarEvent } from '@model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  product: IProduct;

  @Output()
  toggleStarred = new EventEmitter<IStarEvent>();
}
