import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ConciertosRoutingModule } from './conciertos-routing.module';
import { PageComponent } from './page/page.component';
import { ConciertosRoutingModule} from './conciertos-routing.module';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [
    PageComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    ConciertosRoutingModule,
    CommonModule
  ]
})
export class ConciertosModule { }
