import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpgeneralPageRoutingModule } from './expgeneral-routing.module';

import { ExpgeneralPage } from './expgeneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpgeneralPageRoutingModule
  ],
  declarations: [ExpgeneralPage]
})
export class ExpgeneralPageModule {}
