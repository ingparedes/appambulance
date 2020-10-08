import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportarcasosPage } from './exportarcasos.page';

const routes: Routes = [
  {
    path: '',
    component: ExportarcasosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExportarcasosPageRoutingModule {}
