import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadcomplementosPage } from './loadcomplementos.page';

const routes: Routes = [
  {
    path: '',
    component: LoadcomplementosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadcomplementosPageRoutingModule {}
