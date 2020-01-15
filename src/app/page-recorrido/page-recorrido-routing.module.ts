import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageRecorridoPage } from './page-recorrido.page';

const routes: Routes = [
  {
    path: '',
    component: PageRecorridoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRecorridoPageRoutingModule {}
