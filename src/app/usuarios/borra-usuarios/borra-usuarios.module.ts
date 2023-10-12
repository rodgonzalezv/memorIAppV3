import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorraUsuariosPageRoutingModule } from './borra-usuarios-routing.module';

import { BorraUsuariosPage } from './borra-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorraUsuariosPageRoutingModule
  ],
  declarations: [BorraUsuariosPage]
})
export class BorraUsuariosPageModule {}
