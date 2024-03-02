import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticaCookiesRoutingModule } from './politica-cookies-routing.module';
import { PoliticaCookiesComponent } from './component/politica-cookies/politica-cookies.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PoliticaCookiesComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    PoliticaCookiesRoutingModule
  ],
  exports: [
  ]
})
export class PoliticaCookiesModule { }
