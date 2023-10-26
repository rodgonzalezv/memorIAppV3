import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarMemorialPage } from './actualizar-memorial.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarMemorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarMemorialPageRoutingModule {}
