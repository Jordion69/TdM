import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  noticias: Array<any> = [
    { id: 1, title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/news1.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 2, title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/news2.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 3, title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/news3.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 4, title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/news4.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    // { id: 5, title: "Sonata Arctica nuevo disco el próximo", img: "../../../../../assets/img/news1.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    // { id: 6, title: "Sonata Arctica nuevo disco el próximo", img: "../../../../../assets/img/news2.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    // { id: 7, title: "Sonata Arctica nuevo disco el próximo", img: "../../../../../assets/img/news3.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    // { id: 8, title: "Sonata Arctica nuevo disco el próximo", img: "../../../../../assets/img/news4.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"}
  ]


}
