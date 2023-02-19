import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaritosRoutingModule } from './garitos-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    GaritosRoutingModule
  ]
})
export class GaritosModule { }
