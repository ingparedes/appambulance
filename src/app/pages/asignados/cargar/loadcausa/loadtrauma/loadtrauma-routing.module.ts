import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadtraumaPage } from './loadtrauma.page';

const routes: Routes = [
  {
    path: '',
    component: LoadtraumaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadtraumaPageRoutingModule {}
