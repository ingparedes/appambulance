import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpfisicaPage } from './expfisica.page';

const routes: Routes = [
  {
    path: '',
    component: ExpfisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpfisicaPageRoutingModule {}
