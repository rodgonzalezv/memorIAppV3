import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMemorialesPage } from './lista-memoriales.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMemorialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMemorialesPageRoutingModule {}
