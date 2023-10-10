import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductEditPageRoutingModule } from './product-delete-routing.module';

import { ProductDeletePage } from './product-delete.page';
import { ReactiveFormsModule } from '@angular/forms';  // <<========
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,      // <<========
    ProductDeletePageRoutingModule
  ],
  declarations: [ProductDeletePage]
})
export class ProductDeletePageModule {}
