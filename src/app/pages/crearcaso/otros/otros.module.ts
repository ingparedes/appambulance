import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrosPageRoutingModule } from './otros-routing.module';

import { OtrosPage } from './otros.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [OtrosPage]
})
export class OtrosPageModule {}
