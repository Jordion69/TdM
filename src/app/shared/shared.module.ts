import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbuttonComponent } from './components/searchbutton/searchbutton.component';
import { SliderTextComponent } from './components/slider-text/slider-text.component';
import { register } from 'swiper/element/bundle';
import { AttributionComponent } from './components/attribution/attribution.component';
import { BackToTopButtonComponent } from './components/back-to-top-button/back-to-top-button.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

// register Swiper custom elements
register();




@NgModule({
  declarations: [
    SearchbuttonComponent,
    SliderTextComponent,
    AttributionComponent,
    BackToTopButtonComponent,
    LazyImageComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    SearchbuttonComponent,
    SliderTextComponent,
    AttributionComponent,
    BackToTopButtonComponent,
    LazyImageComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
