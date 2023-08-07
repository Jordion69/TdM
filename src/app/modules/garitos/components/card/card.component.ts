import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  p: number = 1;
  garitos: Array<any> = [
    { id: 1, src: "../../../../../assets/img/w1.jpg", title: "Pub Cronos" },
    { id: 2, src: "../../../../../assets/img/w2.jpg", title: "Pub ZZTop" },
    { id: 3, src: "../../../../../assets/img/w3.jpg", title: "Pub Valhala" },
    { id: 4, src: "../../../../../assets/img/w4.jpg", title: "Pub 4 ases" },
    { id: 5, src: "../../../../../assets/img/w1.jpg", title: "Pub Cronos" },
    { id: 6, src: "../../../../../assets/img/w2.jpg", title: "Pub ZZTop" },
    { id: 7, src: "../../../../../assets/img/w3.jpg", title: "Pub Valhala" },
    { id: 8, src: "../../../../../assets/img/w4.jpg", title: "Pub 4 ases" }
  ];

}
