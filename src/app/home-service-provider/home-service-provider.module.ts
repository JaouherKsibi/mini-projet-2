import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeServiceProviderPageRoutingModule } from './home-service-provider-routing.module';

import { HomeServiceProviderPage } from './home-service-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeServiceProviderPageRoutingModule
  ],
  declarations: [HomeServiceProviderPage]
})
export class HomeServiceProviderPageModule {}
