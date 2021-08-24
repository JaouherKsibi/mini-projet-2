import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistinctionPagePage } from './distinction-page.page';

const routes: Routes = [
  {
    path: '',
    component: DistinctionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistinctionPagePageRoutingModule {}
