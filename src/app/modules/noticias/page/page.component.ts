import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/interfaces/noticia';
import { ViewportScroller } from '@angular/common';
import { forkJoin, combineLatest } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  busquedaActiva: boolean = false;
  primerasNoticias!: Noticia[];
  restoNoticias!: Noticia[];
  constructor(
    private noticiasService: NoticiasService,
    private viewportScroller: ViewportScroller,
    private cdr: ChangeDetectorRef,
    private meta: Meta,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.noticiasService.busquedaActiva$.subscribe(estado => {
      this.busquedaActiva = estado;
    });
    this.updateCanonicalUrl();
  }
  private updateCanonicalUrl() {
    const url = window.location.href; // Obtiene la URL actual completa

    // Elimina cualquier etiqueta canónica existente
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


  irANoticias(): void {
    // Asumiendo que existe un método para navegar a Noticias
    // Navega a la página de noticias
    this.viewportScroller.scrollToPosition([0,0]);
  }


}
