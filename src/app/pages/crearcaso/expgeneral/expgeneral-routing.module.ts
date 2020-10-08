import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpgeneralPage } from './expgeneral.page';

const routes: Routes = [
  {
    path: '',
    component: ExpgeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpgeneralPageRoutingModule {}
