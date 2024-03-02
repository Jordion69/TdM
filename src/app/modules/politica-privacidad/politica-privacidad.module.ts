import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticaPrivacidadRoutingModule } from './politica-privacidad-routing.module';
import { PoliticaPrivacidadComponent } from './politica-privacidad.component';


@NgModule({
  declarations: [
    PoliticaPrivacidadComponent
  ],
  imports: [
    CommonModule,
    PoliticaPrivacidadRoutingModule
  ]
})
export class PoliticaPrivacidadModule { }
