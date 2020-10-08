import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplementosPage } from './complementos.page';

const routes: Routes = [
  {
    path: '',
    component: ComplementosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplementosPageRoutingModule {}
