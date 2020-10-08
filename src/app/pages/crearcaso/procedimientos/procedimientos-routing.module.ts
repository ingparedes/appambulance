import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcedimientosPage } from './procedimientos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcedimientosPageRoutingModule {}
