import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';  // <<========

import { ActualizarMemorialPageRoutingModule } from './actualizar-memorial-routing.module';

import { ActualizarMemorialPage } from './actualizar-memorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,      // <<========
    ActualizarMemorialPageRoutingModule
  ],
  declarations: [ActualizarMemorialPage]
})
export class ActualizarMemorialPageModule {}
