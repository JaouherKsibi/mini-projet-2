import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginServiceProviderPage } from './login-service-provider.page';

const routes: Routes = [
  {
    path: '',
    component: LoginServiceProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginServiceProviderPageRoutingModule {}
