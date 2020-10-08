import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadotrosPageRoutingModule } from './loadotros-routing.module';

import { LoadotrosPage } from './loadotros.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadotrosPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [LoadotrosPage]
})
export class LoadotrosPageModule {}
