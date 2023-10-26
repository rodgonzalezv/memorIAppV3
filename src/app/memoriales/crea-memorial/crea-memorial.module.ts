import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaMemorialPageRoutingModule } from './crea-memorial-routing.module';

import { CreaMemorialPage } from './crea-memorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaMemorialPageRoutingModule
  ],
  declarations: [CreaMemorialPage]
})
export class CreaMemorialPageModule {}
