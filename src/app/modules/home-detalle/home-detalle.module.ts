import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDetalleRoutingModule } from './home-detalle-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    HomeDetalleRoutingModule
  ]
})
export class HomeDetalleModule { }
