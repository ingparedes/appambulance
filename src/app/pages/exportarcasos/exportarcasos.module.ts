import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExportarcasosPageRoutingModule } from './exportarcasos-routing.module';

import { ExportarcasosPage } from './exportarcasos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExportarcasosPageRoutingModule
  ],
  declarations: [ExportarcasosPage]
})
export class ExportarcasosPageModule {}
