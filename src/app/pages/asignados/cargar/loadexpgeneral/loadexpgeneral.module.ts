import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadexpgeneralPageRoutingModule } from './loadexpgeneral-routing.module';

import { LoadexpgeneralPage } from './loadexpgeneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadexpgeneralPageRoutingModule
  ],
  declarations: [LoadexpgeneralPage]
})
export class LoadexpgeneralPageModule {}
