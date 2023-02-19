import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasDetalleRoutingModule } from './noticias-detalle-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    NoticiasDetalleRoutingModule
  ]
})
export class NoticiasDetalleModule { }
