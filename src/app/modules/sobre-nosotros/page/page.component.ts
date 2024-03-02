import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit{
  constructor(private viewportScroller: ViewportScroller, private meta: Meta) {}
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0,0]);
    this.updateCanonicalUrl();
  }
  private updateCanonicalUrl() {
    const url = window.location.href; // Obtiene la URL actual

    // Elimina cualquier etiqueta canónica existente
    document.querySelectorAll("link[rel='canonical']").forEach(tag => {
      tag.parentNode?.removeChild(tag);
    });

    // Crea y añade la nueva etiqueta canónica
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}
