import { Component, OnInit } from '@angular/core';
import { ConsentService } from './services/consent.service';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'templo-del-metal';
  showCookieConsent: boolean = false;

  constructor(private consentService: ConsentService, private router: Router) {}

  ngOnInit() {
    this.showCookieConsent = !this.consentService.checkConsent();

    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (this.consentService.checkConsent()) {
        gtag('config', 'G-97HZLHCER3', {
          'page_path': event.urlAfterRedirects,
          'anonymize_ip': true
        });
      }
    });
  }

  onConsentGiven() {
    this.consentService.giveConsent();
    this.showCookieConsent = false;
    gtag('config', 'G-97HZLHCER3', {
      'page_path': this.router.url,
      'anonymize_ip': true
    });
  }
}
