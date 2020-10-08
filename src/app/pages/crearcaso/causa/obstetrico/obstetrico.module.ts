import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObstetricoPageRoutingModule } from './obstetrico-routing.module';

import { ObstetricoPage } from './obstetrico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObstetricoPageRoutingModule
  ],
  declarations: [ObstetricoPage]
})
export class ObstetricoPageModule {}
