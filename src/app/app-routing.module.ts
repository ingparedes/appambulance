import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crearcaso',
    loadChildren: () => import('./pages/crearcaso/crearcaso.module').then( m => m.CrearcasoPageModule)
  },
  {
    path: 'exportarcasos',
    loadChildren: () => import('./pages/exportarcasos/exportarcasos.module').then( m => m.ExportarcasosPageModule)
  },
  {
    path: 'turno',
    loadChildren: () => import('./pages/turno/turno.module').then( m => m.TurnoPageModule)
  },
  {
    path: 'asignados',
    loadChildren: () => import('./pages/asignados/asignados.module').then( m => m.AsignadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
