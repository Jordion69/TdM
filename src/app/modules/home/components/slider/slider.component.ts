import { Component } from '@angular/core';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {

  garitos: Array<any> = [
    { id: 1, place: "Barcelona", src: "/assets/img/w1.jpg", title: "Pub Cronos" },
    { id: 2, place: "Tarragona", src: "/assets/img/w2.jpg", title: "Pub ZZTop" },
    { id: 3, place: "Lleida", src: "/assets/img/w3.jpg", title: "Pub Valhala" },
    { id: 4, place: "Girona", src: "/assets/img/w4.jpg", title: "Pub 4 ases" },
    { id: 5, place: "Murcia", src: "/assets/img/w1.jpg", title: "Pub Cronos" },
    { id: 6, place: "La rioja", src: "/assets/img/w2.jpg", title: "Pub ZZTop" },
    { id: 7, place: "Burgos", src: "/assets/img/w3.jpg", title: "Pub Valhala" },
    { id: 8, place: "Canarias", src: "/assets/img/w4.jpg", title: "Pub 4 ases" },
    { id: 8, place: "Soria", src: "/assets/img/w4.jpg", title: "Pub 4 ases" }
  ];
}
