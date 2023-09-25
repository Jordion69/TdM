import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormContactComponent } from './components/form-contact/form-contact.component';


@NgModule({
  declarations: [
    PageComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContactoModule { }
