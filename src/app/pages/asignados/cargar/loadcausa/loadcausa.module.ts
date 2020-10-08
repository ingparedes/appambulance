import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadcausaPageRoutingModule } from './loadcausa-routing.module';

import { LoadcausaPage } from './loadcausa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadcausaPageRoutingModule
  ],
  declarations: [LoadcausaPage]
})
export class LoadcausaPageModule {}
