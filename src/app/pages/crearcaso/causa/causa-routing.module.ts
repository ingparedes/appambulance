import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CausaPage } from './causa.page';

const routes: Routes = [
  {
    path: '',
    component: CausaPage
  }
  ,
  {
    path: 'trauma',
    loadChildren: () => import('./trauma/trauma.module').then(m => m.TraumaPageModule)
  },
  {
    path: 'obstetrico',
    loadChildren: () => import('./obstetrico/obstetrico.module').then(m => m.ObstetricoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CausaPageRoutingModule { }
