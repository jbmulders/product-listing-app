import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'app/products/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  product: IProduct;

  @Output()
  toggleStarred = new EventEmitter<IProduct>();

}
