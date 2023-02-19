import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ConciertosRoutingModule } from './conciertos-routing.module';
import { PageComponent } from './page/page.component';
import { ConciertosRoutingModule} from './conciertos-routing.module'

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    ConciertosRoutingModule,
    CommonModule

  ]
})
export class ConciertosModule { }
