import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaUsuarioPageRoutingModule } from './edita-usuario-routing.module';

import { EditaUsuarioPage } from './edita-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaUsuarioPageRoutingModule
  ],
  declarations: [EditaUsuarioPage]
})
export class EditaUsuarioPageModule {}
