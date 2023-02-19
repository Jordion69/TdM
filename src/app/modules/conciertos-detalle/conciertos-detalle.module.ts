import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciertosDetalleRoutingModule } from './conciertos-detalle-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    ConciertosDetalleRoutingModule
  ]
})
export class ConciertosDetalleModule { }
