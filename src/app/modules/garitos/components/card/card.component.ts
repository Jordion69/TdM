import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  p: number = 1;
  currentComunidadAutonoma: string = '';
  garitos: Array<any> = [
    { id: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 2, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 3, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 4, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 5, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 6, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 7, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 8, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" },
    { id: 9, comunidad_autonoma: "Extremadura",src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 10,comunidad_autonoma: "Extremadura", src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 11,comunidad_autonoma: "Extremadura", src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 12,comunidad_autonoma: "Extremadura", src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 13,comunidad_autonoma: "Extremadura", src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 14,comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 15,comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 16,comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" },
    { id: 17,comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 18,comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 19,comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 20,comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 21,comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 22,comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 23,comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 24,comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" }
  ];
}
