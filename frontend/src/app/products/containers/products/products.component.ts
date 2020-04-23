import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductFacade } from 'app/products/products-facade';

import { IProduct } from 'app/products/models/product';
import { IStarEvent } from 'app/products/models/starEvent';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]>;
  public starredProducts$: Observable<IProduct[]>;
  public starredCount$: Observable<number>;

  constructor(private productFacade: ProductFacade) {}

  ngOnInit(): void {
    this.products$ = this.productFacade.getAllProducts();
    this.starredProducts$ = this.productFacade.getStarredProducts();
    this.starredCount$ = this.productFacade.getStarredProductsCount();
  }

  toggleStarred(event: IStarEvent): void {
    this.productFacade.toggleStarred(event.product);
  }

  clearAll() {
    this.productFacade.clearLocalStorage();
  }
}
