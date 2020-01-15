import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageRecorridoCombinacionPage } from './page-recorrido-combinacion.page';

const routes: Routes = [
  {
    path: '',
    component: PageRecorridoCombinacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRecorridoCombinacionPageRoutingModule {}
