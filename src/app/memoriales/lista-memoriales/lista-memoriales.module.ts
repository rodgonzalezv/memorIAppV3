import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMemorialesPageRoutingModule } from './lista-memoriales-routing.module';

import { ListaMemorialesPage } from './lista-memoriales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMemorialesPageRoutingModule
  ],
  declarations: [ListaMemorialesPage]
})
export class ListaMemorialesPageModule {}
