import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaddiagnosticoPage } from './loaddiagnostico.page';

const routes: Routes = [
  {
    path: '',
    component: LoaddiagnosticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaddiagnosticoPageRoutingModule {}
