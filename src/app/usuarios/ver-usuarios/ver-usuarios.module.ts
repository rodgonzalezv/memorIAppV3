import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { VerUsuariosPageRoutingModule } from './ver-usuarios-routing.module';

import { VerUsuariosPage } from './ver-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerUsuariosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [VerUsuariosPage]
})
export class VerUsuariosPageModule {}
