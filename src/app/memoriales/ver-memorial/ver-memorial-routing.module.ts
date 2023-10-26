import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMemorialPage } from './ver-memorial.page';

const routes: Routes = [
  {
    path: '',
    component: VerMemorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMemorialPageRoutingModule {}
