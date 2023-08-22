import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { PageComponent } from './page/page.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PageComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContactoModule { }
