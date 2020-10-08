import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadobstetricoPageRoutingModule } from './loadobstetrico-routing.module';

import { LoadobstetricoPage } from './loadobstetrico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadobstetricoPageRoutingModule
  ],
  declarations: [LoadobstetricoPage]
})
export class LoadobstetricoPageModule {}
