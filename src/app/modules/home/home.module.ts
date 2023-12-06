import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';
import { TitleComponent } from './components/title/title.component';
import { HeadlineComponent } from './components/headline/headline.component';
// import { SwiperModule } from 'swiper/angular';
import { SliderNewsComponent } from './components/slider-news/slider-news.component';
import { SliderConcertsComponent } from './components/slider-concerts/slider-concerts.component';
import { SliderClubsComponent } from './components/slider-clubs/slider-clubs.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    PageComponent,
    TitleComponent,
    HeadlineComponent,
    SliderNewsComponent,
    SliderConcertsComponent,
    SliderClubsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // SwiperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
