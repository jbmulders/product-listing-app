import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDataLayer } from 'app/products/products-data-layer';

import { IProduct } from 'app/products/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]>;
  public starredProducts$: Observable<IProduct[]>;
  public starredCount$: Observable<number>;

  constructor(private productDataLayer: ProductsDataLayer) { }

  ngOnInit(): void {
    this.products$ = this.productDataLayer.getAllProducts();
    this.starredProducts$ = this.productDataLayer.getStarredProducts();
    this.starredCount$ = this.productDataLayer.getStarredProductsCount();
  }

  toggleStarred(product: IProduct): void {
    this.productDataLayer.toggleStarred(product);
  }

}
