import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatModule } from 'app/core/modules/mat.module';

import { ProductsComponent } from './containers/products/products.component';
import { ProductsService } from './services/products/products.service';
import { CardComponent } from './components/card/card.component';
import { SidebarCardComponent } from './components/sidebar-card/sidebar-card.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CardComponent,
    SidebarCardComponent
  ],
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [ProductsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
