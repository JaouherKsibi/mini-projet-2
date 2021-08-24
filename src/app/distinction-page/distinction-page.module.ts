import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistinctionPagePageRoutingModule } from './distinction-page-routing.module';

import { DistinctionPagePage } from './distinction-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistinctionPagePageRoutingModule
  ],
  declarations: [DistinctionPagePage]
})
export class DistinctionPagePageModule {}
