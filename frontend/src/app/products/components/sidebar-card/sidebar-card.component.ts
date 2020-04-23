import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'app/products/models/product';
import { IStarEvent } from 'app/products/models/starEvent';

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrls: ['./sidebar-card.component.scss'],
})
export class SidebarCardComponent {
  @Input()
  product: IProduct;

  @Output()
  toggleStarred = new EventEmitter<IStarEvent>();
}
