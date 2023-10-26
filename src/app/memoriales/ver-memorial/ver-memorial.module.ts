import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMemorialPageRoutingModule } from './ver-memorial-routing.module';

import { VerMemorialPage } from './ver-memorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMemorialPageRoutingModule
  ],
  declarations: [VerMemorialPage]
})
export class VerMemorialPageModule {}
