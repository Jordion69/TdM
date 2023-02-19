import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreNosotrosRoutingModule } from './sobre-nosotros-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    SobreNosotrosRoutingModule
  ]
})
export class SobreNosotrosModule { }
