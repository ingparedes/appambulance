import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpfisicaPageRoutingModule } from './expfisica-routing.module';

import { ExpfisicaPage } from './expfisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpfisicaPageRoutingModule
  ],
  declarations: [ExpfisicaPage]
})
export class ExpfisicaPageModule {}
