import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaritosDetalleRoutingModule } from './garitos-detalle-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    GaritosDetalleRoutingModule
  ]
})
export class GaritosDetalleModule { }
