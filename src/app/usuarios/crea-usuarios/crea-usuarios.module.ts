import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaUsuariosPageRoutingModule } from './crea-usuarios-routing.module';

import { CreaUsuariosPage } from './crea-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaUsuariosPageRoutingModule
  ],
  declarations: [CreaUsuariosPage]
})
export class CreaUsuariosPageModule {}
