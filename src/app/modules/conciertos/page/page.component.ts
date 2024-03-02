import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-conciertos',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit{
  textToDisplay: string[] = ['¿Tu banda desata tormentas de riffs endiablados?', 'Si tu grupo hace temblar las paredes con puro metal o punk...', '¡Haznos saber! Manda tu info a [templodelmetal1969@gmail.com]  y súmate a nuestro cartel de conciertos.'];
  constructor(private meta: Meta, private router: Router) {}
  ngOnInit(): void {
    this.updateCanonicalUrl();
  }
  updateCanonicalUrl() {
    const url = window.location.origin + this.router.url;
    // Eliminar cualquier etiqueta canónica existente primero
    const existingCanonicalTags = document.querySelectorAll("link[rel='canonical']");
    existingCanonicalTags.forEach(tag =>{
      if (tag.parentNode !== null) {
        tag.parentNode.removeChild(tag)
      }
    });

    // Crear y añadir la nueva etiqueta canónica
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}

