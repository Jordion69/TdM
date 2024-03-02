import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { PoliticaCookiesComponent } from './politica-cookies/component/politica-cookies/politica-cookies.component';import { CookieConsentComponent } from './cookie-consent/components/cookie-consent/cookie-consent.component';



@NgModule({
  declarations: [
    PoliticaPrivacidadComponent,
    PoliticaCookiesComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ],
  exports: [
    PoliticaCookiesComponent
  ]
})
export class ModulesModule { }
