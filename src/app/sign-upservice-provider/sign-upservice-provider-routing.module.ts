import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUPServiceProviderPage } from './sign-upservice-provider.page';

const routes: Routes = [
  {
    path: '',
    component: SignUPServiceProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUPServiceProviderPageRoutingModule {}
