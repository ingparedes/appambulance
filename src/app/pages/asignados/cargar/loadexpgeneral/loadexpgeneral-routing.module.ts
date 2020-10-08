import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadexpgeneralPage } from './loadexpgeneral.page';

const routes: Routes = [
  {
    path: '',
    component: LoadexpgeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadexpgeneralPageRoutingModule {}
