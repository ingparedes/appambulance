import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadobstetricoPage } from './loadobstetrico.page';

const routes: Routes = [
  {
    path: '',
    component: LoadobstetricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadobstetricoPageRoutingModule {}
