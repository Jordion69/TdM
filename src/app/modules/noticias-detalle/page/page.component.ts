import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit{
  constructor(
    private route: ActivatedRoute, // Para acceder a los parámetros de la ruta
    private meta: Meta // Para manipular las metaetiquetas
  ) {}

  ngOnInit(): void {
    // Obtiene el identificador de la noticia de los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      const noticiaId = params.get('id');
      if (noticiaId) {
        this.updateCanonicalUrl(noticiaId);
      }
    });
  }

  private updateCanonicalUrl(noticiaId: string) {
    // Construye la URL canónica usando el identificador de la noticia
    const url = `${window.location.origin}/noticias-detalle/${noticiaId}`;

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
