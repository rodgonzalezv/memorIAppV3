import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorraUsuariosPage } from './borra-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: BorraUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorraUsuariosPageRoutingModule {}
