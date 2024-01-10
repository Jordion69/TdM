import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ConciertosRoutingModule } from './conciertos-routing.module';
import { PageComponent } from './page/page.component';
import { ConciertosRoutingModule} from './conciertos-routing.module';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { ConcertCardComponent } from './components/concert-card/concert-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';


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
    FormsModule,
    NgxPaginationModule,
    SharedModule

  ]
})
export class ConciertosModule { }
