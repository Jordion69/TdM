import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { PageComponent } from './page/page.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    PageComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
