import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CookieConsentComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CookieConsentComponent
  ]
})
export class CoreModule { }
