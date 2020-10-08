import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadinfobasicaPageRoutingModule } from './loadinfobasica-routing.module';

import { LoadinfobasicaPage } from './loadinfobasica.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadinfobasicaPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [LoadinfobasicaPage]
})
export class LoadinfobasicaPageModule {}
