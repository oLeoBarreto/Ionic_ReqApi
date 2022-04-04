import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformPageRoutingModule } from './inform-routing.module';

import { InformPage } from './inform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformPageRoutingModule
  ],
  declarations: [InformPage]
})
export class InformPageModule {}
