import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasDetalleRoutingModule } from './noticias-detalle-routing.module';
import { PageComponent } from './page/page.component';
import { NoticiaDetalleComponent } from './components/noticia-detalle/noticia-detalle.component';


@NgModule({
  declarations: [
    PageComponent,
    NoticiaDetalleComponent
  ],
  imports: [
    CommonModule,
    NoticiasDetalleRoutingModule
  ]
})
export class NoticiasDetalleModule { }

export { NoticiaDetalleComponent };
