import { Component, HostListener,  OnInit, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';
import { throttleTime, filter } from 'rxjs/operators';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

    private scrollEvents = new Subject<Event>();

    constructor(private router: Router, private viewportScroller: ViewportScroller, private meta: Meta) {
      this.scrollEvents.pipe(
        throttleTime(100) // Ajusta este tiempo según tus necesidades
      ).subscribe(event => this.handleScroll(event));
    }
    ngOnInit() {
      this.updateCanonicalUrl();
      // Otras inicializaciones necesarias
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd || e instanceof Scroll)
      ).subscribe(e => {
        if (e instanceof Scroll) {
          // Intenta restaurar la posición [x, y] después de la navegación
          this.viewportScroller.scrollToPosition(e.position || [0,0]);
        }
      });
    }

    ngOnDestroy() {
      // Limpieza necesaria
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
      this.scrollEvents.next(event);
    }

    private handleScroll(event: Event) {
      // Tu lógica existente de onScroll va aquí
      const titles = document.querySelectorAll('.color-overlay');
      const sliders = document.querySelectorAll('.slider-news, .slider-concerts, .slider-clubs');

      titles.forEach((title, index) => {
        const position = title.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        if (position < windowHeight) {
          title.classList.add('is-visible');
          sliders[index].classList.add('is-visible');

          if (windowWidth > 768) {
            if (index % 2 === 0) {
              title.classList.add('fade-in-left');
              sliders[index].classList.add('fade-in-right');
            } else {
              title.classList.add('fade-in-right');
              sliders[index].classList.add('fade-in-left');
            }
          }
        }
      });
    }
    private updateCanonicalUrl() {
      const url = window.location.href; // Obtiene la URL actual de la ventana

      // Elimina las etiquetas canónicas existentes
      document.querySelectorAll("link[rel='canonical']").forEach(tag => {
        if (tag.parentNode !== null) {
          tag.parentNode.removeChild(tag);
        }
      });

      // Crea y añade la nueva etiqueta canónica
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
