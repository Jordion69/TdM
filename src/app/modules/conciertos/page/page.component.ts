import { Component } from '@angular/core';

@Component({
  selector: 'app-page-conciertos',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  textToDisplay: string[] = ['¿Tu banda desata tormentas de riffs endiablados?', 'Si tu grupo hace temblar las paredes con puro metal o punk...', '¡Haznos saber! Manda tu info a [templodelmetal1969@gmail.com]  y súmate a nuestro cartel de conciertos.'];
}

