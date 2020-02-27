import { Injectable } from '@angular/core';
import { IProduct } from 'app/products/models/product';
import { IStarred } from 'app/products/models/starred';
import { BehaviorSubject, Observable } from 'rxjs';

import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: IProduct[];
  private starredProducts: IStarred;

  private products$: BehaviorSubject<IProduct[]>;
  private starredProducts$: BehaviorSubject<IStarred>;

  private readonly localStorageVar = 'starredProducts';

  constructor() {
    this.products$ = new BehaviorSubject<IProduct[]>([]);
    this.starredProducts$ = new BehaviorSubject<IStarred>({});

    this.initProducts();
    this.initStarredProducts();
  }

  getProducts$(): Observable<IProduct[]> {
    return this.products$.asObservable();
  }

  getStarredProducts$(): Observable<IStarred> {
    return this.starredProducts$.asObservable();
  }

  updateProduct(product: IProduct) {
    const index = this.products.findIndex(p => p.id === product.id);
    this.products[index] = product;

    this.notifyProducts();
  }

  updateStarredProducts(product: IProduct) {
    this.starredProducts[product.id] = product.starred;
    localStorage.setItem(this.localStorageVar, JSON.stringify(this.starredProducts));

    this.notifyStarred();
  }

  clearLocalStorage() {
    localStorage.removeItem(this.localStorageVar);
    this.starredProducts = {};

    this.notifyStarred();
  }

  private initProducts(): void {
    this.products = Object.values(Products);
    this.notifyProducts();
  }

  private initStarredProducts(): void {
    const localStarred = localStorage.getItem(this.localStorageVar);

    this.starredProducts = localStarred && localStarred.length > 0 ? JSON.parse(localStarred) : {};

    this.notifyStarred();
  }

  private notifyProducts() {
    this.products$.next(this.products);
  }

  private notifyStarred() {
    this.starredProducts$.next(this.starredProducts);
  }
}
