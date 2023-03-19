import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';
import { TitleComponent } from './components/title/title.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeadlineComponent } from './components/headline/headline.component';


@NgModule({
  declarations: [
    PageComponent,
    TitleComponent,
    SliderComponent,
    HeadlineComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
