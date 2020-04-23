import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsService } from 'app/products/services/products/products.service';
import { IProduct, IStarred } from '@model';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  private products$: Observable<IProduct[]>;
  private starredProducts$: Observable<IStarred>;

  constructor(private productsService: ProductsService) {
    this.products$ = productsService.getProducts$();
    this.starredProducts$ = productsService.getStarredProducts$();
  }

  getAllProducts(): Observable<IProduct[]> {
    return combineLatest([this.products$, this.starredProducts$]).pipe(
      map(([products, starredMap]: [IProduct[], IStarred]) =>
        products.map((p) => ((p.starred = starredMap[p.id] ? true : false), p))
      ),
      map(this.sortProducts)
    );
  }

  getStarredProducts(): Observable<IProduct[]> {
    return this.getAllProducts().pipe(
      map((pArray) => pArray.filter(this.starredProductsFilter))
    );
  }

  getStarredProductsCount() {
    return this.getAllProducts().pipe(
      map((pArray) => pArray.filter(this.starredProductsFilter)),
      map((pArray) => pArray.length)
    );
  }

  toggleStarred(product: IProduct) {
    product.starred = !product.starred;
    this.productsService.updateStarredProducts(product);
  }

  clearLocalStorage() {
    this.productsService.clearLocalStorage();
  }

  private sortProducts(array: IProduct[]) {
    return array.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  private starredProductsFilter(product: IProduct) {
    return product.starred === true;
  }
}
