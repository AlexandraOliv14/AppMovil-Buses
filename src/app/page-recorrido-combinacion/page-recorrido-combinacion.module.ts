import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageRecorridoCombinacionPageRoutingModule } from './page-recorrido-combinacion-routing.module';

import { PageRecorridoCombinacionPage } from './page-recorrido-combinacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageRecorridoCombinacionPageRoutingModule
  ],
  declarations: [PageRecorridoCombinacionPage]
})
export class PageRecorridoCombinacionPageModule {}
