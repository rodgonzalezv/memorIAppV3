import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { ListaMemorialesPageRoutingModule } from './lista-memoriales-routing.module';

import { ListaMemorialesPage } from './lista-memoriales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMemorialesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListaMemorialesPage]
})
export class ListaMemorialesPageModule {}

