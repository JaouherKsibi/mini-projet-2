import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeServiceProviderPage } from './home-service-provider.page';

const routes: Routes = [
  {
    path: '',
    component: HomeServiceProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeServiceProviderPageRoutingModule {}
