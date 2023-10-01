import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ConciertosRoutingModule } from './conciertos-routing.module';
import { PageComponent } from './page/page.component';
import { ConciertosRoutingModule} from './conciertos-routing.module';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { ConcertCardComponent } from './components/concert-card/concert-card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PageComponent,
    CardComponent,
    SearchComponent,
    ConcertCardComponent
  ],
  imports: [
    ConciertosRoutingModule,
    CommonModule,
    NgxPaginationModule

  ]
})
export class ConciertosModule { }
