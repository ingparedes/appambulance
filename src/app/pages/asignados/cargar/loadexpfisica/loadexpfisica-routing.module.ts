import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadexpfisicaPage } from './loadexpfisica.page';

const routes: Routes = [
  {
    path: '',
    component: LoadexpfisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadexpfisicaPageRoutingModule {}
