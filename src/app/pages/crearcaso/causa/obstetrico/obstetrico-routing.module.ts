import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObstetricoPage } from './obstetrico.page';

const routes: Routes = [
  {
    path: '',
    component: ObstetricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObstetricoPageRoutingModule {}
