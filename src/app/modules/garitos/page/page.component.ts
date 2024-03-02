import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { GaritosService } from 'src/app/services/garitos.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy{
  textToDisplay: string[] = ['¿Ves algo que no mola en nuestros garitos?', 'Si pillas algún fallo o algo que no suene a puro metal o punk...', '¡Dínoslo ya! Manda un correo a [templodelmetal1969@gmail.com] y únete al mosh.'];
  private routerSubscription: Subscription | undefined;
  constructor(private router: Router, private garitosService: GaritosService, private meta: Meta) { }

  ngOnInit() {
    this.updateCanonicalUrl();
    this.routerSubscription = this.router.events.subscribe(event => {

      if (event instanceof NavigationStart && event.navigationTrigger === 'popstate') {
        this.garitosService.resetSearch();
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  updateCanonicalUrl() {
    const url = window.location.origin + this.router.url;
    const existingCanonicalTag = document.querySelector("link[rel='canonical']");
    if (existingCanonicalTag) {
      document.head.removeChild(existingCanonicalTag);
    }
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}
