import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaMemorialPage } from './crea-memorial.page';

const routes: Routes = [
  {
    path: '',
    component: CreaMemorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaMemorialPageRoutingModule {}
