import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcasoPageRoutingModule } from './crearcaso-routing.module';

import { CrearcasoPage } from './crearcaso.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    CrearcasoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearcasoPage]
})
export class CrearcasoPageModule {}
