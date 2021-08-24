import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginServiceProviderPageRoutingModule } from './login-service-provider-routing.module';

import { LoginServiceProviderPage } from './login-service-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginServiceProviderPageRoutingModule
  ],
  declarations: [LoginServiceProviderPage]
})
export class LoginServiceProviderPageModule {}
