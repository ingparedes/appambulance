import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedimientosPageRoutingModule } from './procedimientos-routing.module';

import { ProcedimientosPage } from './procedimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcedimientosPageRoutingModule
  ],
  declarations: [ProcedimientosPage]
})
export class ProcedimientosPageModule {}
