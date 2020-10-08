import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadexpfisicaPageRoutingModule } from './loadexpfisica-routing.module';

import { LoadexpfisicaPage } from './loadexpfisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadexpfisicaPageRoutingModule
  ],
  declarations: [LoadexpfisicaPage]
})
export class LoadexpfisicaPageModule {}
