import { Component } from '@angular/core';
import { ConsentService } from 'src/app/services/consent.service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent {
  show: boolean;

  constructor(private consentService: ConsentService) {
    this.show = !this.consentService.checkConsent();
  }

  consentGiven() {
    this.consentService.giveConsent();
    this.show = false;
  }

  decline() {
    this.consentService.declineConsent();
    this.show = false;
    // Aquí puedes manejar lo que sucede cuando el usuario rechaza las cookies
  }

}
