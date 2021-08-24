import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpClientPageRoutingModule } from './sign-up-client-routing.module';

import { SignUpClientPage } from './sign-up-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpClientPageRoutingModule
  ],
  declarations: [SignUpClientPage]
})
export class SignUpClientPageModule {}
