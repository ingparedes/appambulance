import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaddiagnosticoPageRoutingModule } from './loaddiagnostico-routing.module';

import { LoaddiagnosticoPage } from './loaddiagnostico.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaddiagnosticoPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [LoaddiagnosticoPage]
})
export class LoaddiagnosticoPageModule {}
