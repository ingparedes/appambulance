import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadtraumaPageRoutingModule } from './loadtrauma-routing.module';

import { LoadtraumaPage } from './loadtrauma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadtraumaPageRoutingModule
  ],
  declarations: [LoadtraumaPage]
})
export class LoadtraumaPageModule {}
