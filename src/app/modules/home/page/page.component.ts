import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  garitos: Array<any> = [
    { id: 1, place: "Barcelona", src: "../../../../../assets/img/w1.jpg", title: "Pub Cronos" },
    { id: 2, place: "Madrid", src: "../../../../../assets/img/w2.jpg", title: "Pub ZZTop" },
    { id: 3, place: "Sevilla", src: "../../../../../assets/img/w3.jpg", title: "Pub Valhala" },
    { id: 4, place: "Caceres", src: "../../../../../assets/img/w4.jpg", title: "Pub 4 ases" },
    { id: 5, place: "Málaga", src: "../../../../../assets/img/w1.jpg", title: "Pub Cronos" },
    { id: 6, place: "La rioja", src: "../../../../../assets/img/w2.jpg", title: "Pub ZZTop" },
    { id: 7, place: "Murcia", src: "../../../../../assets/img/w3.jpg", title: "Pub Valhala" },
    { id: 8, place: "", src: "../../../../../assets/img/w4.jpg", title: "Pub 4 ases" }
  ];
  noticias: Array<any> = [
    { id: 1, title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/news1.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 2, title: "Slayer muere bateria", img: "../../../../../assets/img/news2.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 3, title: "Twisted sister arrestado cantante", img: "../../../../../assets/img/news3.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 4, title: "Judas Priest muere rod", img: "../../../../../assets/img/news4.jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  ];
  conciertos: Array<any> = [
    { id: 1, bandaAux: "Ratas + 11Bis", day: "2", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 25, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept" },
    { id: 2, bandaAux: "Ratas + 11Bis", day: "2", month: "Marzo", src: "../../../../../assets/img/concierto.jpg", dia: 26, mes: "Marzo", ciudad: "Granada", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept"},
    { id: 3, bandaAux: "Ratas + 11Bis", day: "25", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 27, mes: "Marzo", ciudad: "Cordoba", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept"},
    { id: 4, bandaAux: "Ratas + 11Bis", day: "21", month: "Abril", src: "../../../../../assets/img/concierto.jpg", dia: 28, mes: "Marzo", ciudad: "Tarragona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept" },
    { id: 5, bandaAux: "Ratas + 11Bis", day: "23", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 29, mes: "Marzo", ciudad: "Yecla", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Runnig Wild" },
    { id: 6, bandaAux: "Ratas + 11Bis", day: "22", month: "Marzo", src: "../../../../../assets/img/concierto.jpg", dia: 30, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Legion"},
    { id: 7, bandaAux: "Ratas + 11Bis", day: "24", month: "Mayo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 31, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Sonata Arctica" },
    { id: 8, bandaAux: "Ratas + 11Bis", day: "18", month: "Marzo", src: "../../../../../assets/img/concierto.jpg", dia: 1, mes: "Abril", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Obituary/guns.jpg" }
  ]
  }
