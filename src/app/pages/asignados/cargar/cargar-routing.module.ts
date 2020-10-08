import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarPage } from './cargar.page';

const routes: Routes = [
  {
    path: '',
    component: CargarPage,
    children: [
      {
        path: 'infobasica',
        loadChildren: () => import('./loadinfobasica/loadinfobasica.module').then(m => m.LoadinfobasicaPageModule)
      },
      {
        path: 'causa',
        loadChildren: () => import('./loadcausa/loadcausa.module').then(m => m.LoadcausaPageModule)
      },
      {
        path: 'expgeneral',
        loadChildren: () => import('./loadexpgeneral/loadexpgeneral.module').then(m => m.LoadexpgeneralPageModule)
      },
      {
        path: 'expfisica',
        loadChildren: () => import('./loadexpfisica/loadexpfisica.module').then(m => m.LoadexpfisicaPageModule)
      },
      {
        path: 'diagnostico',
        loadChildren: () => import('./loaddiagnostico/loaddiagnostico.module').then(m => m.LoaddiagnosticoPageModule)
      },
      {
        path: 'procedimientos',
        loadChildren: () => import('./loadprocedimientos/loadprocedimientos.module').then(m => m.LoadprocedimientosPageModule)
      },
      {
        path: 'complementos',
        loadChildren: () => import('./loadcomplementos/loadcomplementos.module').then(m => m.LoadcomplementosPageModule)
      },
      {
        path: 'otros',
        loadChildren: () => import('./loadotros/loadotros.module').then(m => m.LoadotrosPageModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargarPageRoutingModule { }
