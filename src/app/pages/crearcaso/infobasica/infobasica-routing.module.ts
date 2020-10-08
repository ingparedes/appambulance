import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfobasicaPage } from './infobasica.page';

const routes: Routes = [
  {
    path: '',
    component: InfobasicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfobasicaPageRoutingModule {}
