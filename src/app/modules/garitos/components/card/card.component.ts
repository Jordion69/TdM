import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  p: number = 1;
  garitos: Array<any> = [
    { id: 1, src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 2, src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 3, src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 4, src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 5, src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 6, src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 7, src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 8, src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" },
    { id: 9, src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 10, src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 11, src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 12, src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 13, src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 14, src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 15, src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 16, src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" },
    { id: 17, src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 18, src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 19, src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 20, src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 21, src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 22, src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 23, src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 24, src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" }
  ];

}
