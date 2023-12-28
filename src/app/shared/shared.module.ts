import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbuttonComponent } from './components/searchbutton/searchbutton.component';
import { SliderTextComponent } from './components/slider-text/slider-text.component';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();




@NgModule({
  declarations: [
    SearchbuttonComponent,
    SliderTextComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchbuttonComponent,
    SliderTextComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
