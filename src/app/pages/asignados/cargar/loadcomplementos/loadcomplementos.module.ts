import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadcomplementosPageRoutingModule } from './loadcomplementos-routing.module';

import { LoadcomplementosPage } from './loadcomplementos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadcomplementosPageRoutingModule
  ],
  declarations: [LoadcomplementosPage]
})
export class LoadcomplementosPageModule {}
