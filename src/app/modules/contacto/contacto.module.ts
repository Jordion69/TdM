import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { PageComponent } from './page/page.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    PageComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
