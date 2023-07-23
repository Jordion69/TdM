import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbuttonComponent } from './components/searchbutton/searchbutton.component';



@NgModule({
  declarations: [
    SearchbuttonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchbuttonComponent,
  ]
})
export class SharedModule { }
