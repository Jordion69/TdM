import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaritosRoutingModule } from './garitos-routing.module';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { MainCitiesComponent } from './components/main-cities/main-cities.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageComponent,
    SearchComponent,
    CardComponent,
    MainCitiesComponent,

  ],
  imports: [
    CommonModule,
    GaritosRoutingModule,
    CarouselModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class GaritosModule { }
