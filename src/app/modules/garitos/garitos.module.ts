import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaritosRoutingModule } from './garitos-routing.module';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    PageComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GaritosRoutingModule
  ]
})
export class GaritosModule { }
