import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpClientPage } from './sign-up-client.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpClientPageRoutingModule {}
