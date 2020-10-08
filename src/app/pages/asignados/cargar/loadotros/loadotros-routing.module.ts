import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadotrosPage } from './loadotros.page';

const routes: Routes = [
  {
    path: '',
    component: LoadotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadotrosPageRoutingModule {}
