import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaDetalleComponent } from './noticias-detalle.module';
import { PageComponent } from './page/page.component';
const routes: Routes = [
  {
  path: '',
  component: PageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasDetalleRoutingModule { }
