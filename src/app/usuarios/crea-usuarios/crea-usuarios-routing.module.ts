import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaUsuariosPage } from './crea-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: CreaUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaUsuariosPageRoutingModule {}
