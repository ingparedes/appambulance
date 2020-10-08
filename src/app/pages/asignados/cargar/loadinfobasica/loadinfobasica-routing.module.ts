import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadinfobasicaPage } from './loadinfobasica.page';

const routes: Routes = [
  {
    path: '',
    component: LoadinfobasicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadinfobasicaPageRoutingModule {}
