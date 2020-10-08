import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearcasoPage } from './crearcaso.page';

const routes: Routes = [
  {
    path: '',
    component: CrearcasoPage,
    children: [      
      {
        path: 'infobasica',
        loadChildren: () => import('./infobasica/infobasica.module').then(m => m.InfobasicaPageModule)
      },
      {
        path: 'causa',
        loadChildren: () => import('./causa/causa.module').then(m => m.CausaPageModule)        
      },      
      {
        path: 'expgeneral',
        loadChildren: () => import('./expgeneral/expgeneral.module').then(m => m.ExpgeneralPageModule)
      },
      {
        path: 'expfisica',
        loadChildren: () => import('./expfisica/expfisica.module').then(m => m.ExpfisicaPageModule)
      },
      {
        path: 'diagnostico',
        loadChildren: () => import('./diagnostico/diagnostico.module').then(m => m.DiagnosticoPageModule)
      },
      {
        path: 'procedimientos',
        loadChildren: () => import('./procedimientos/procedimientos.module').then(m => m.ProcedimientosPageModule)
      },
      {
        path: 'complementos',
        loadChildren: () => import('./complementos/complementos.module').then(m => m.ComplementosPageModule)
      },
      {
        path: 'otros',
        loadChildren: () => import('./otros/otros.module').then(m => m.OtrosPageModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearcasoPageRoutingModule { }
