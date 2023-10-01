import { Component,  ViewEncapsulation, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Swiper,
  EffectCoverflow,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-slider-concerts',
  templateUrl: './slider-concerts.component.html',
  styleUrls: ['./slider-concerts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderConcertsComponent {
  swiperConfig: any = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
  };
  conciertos: Array<any> = [
    { id: 1, bandaAux: "Ratas + 11Bis", day: "2", month: "Marzo", src: "../../../../../assets/img/concert1.jpg", dia: 25, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept" },
    { id: 2, bandaAux: "Ratas + 11Bis", day: "2", month: "Marzo", src: "../../../../../assets/img/concert2.jpg", dia: 26, mes: "Marzo", ciudad: "Granada", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept"},
    { id: 3, bandaAux: "Ratas + 11Bis", day: "25", month: "Marzo", src: "../../../../../assets/img/concert3.jpg", dia: 27, mes: "Marzo", ciudad: "Cordoba", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept"},
    { id: 4, bandaAux: "Ratas + 11Bis", day: "21", month: "Abril", src: "../../../../../assets/img/concert4.jpg", dia: 28, mes: "Marzo", ciudad: "Tarragona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept" },
    { id: 5, bandaAux: "Ratas + 11Bis", day: "23", month: "Marzo", src: "../../../../../assets/img/concert6.jpg", dia: 29, mes: "Marzo", ciudad: "Yecla", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Runnig Wild" },
    { id: 6, bandaAux: "Ratas + 11Bis", day: "22", month: "Marzo", src: "../../../../../assets/img/concert7.jpg", dia: 30, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Legion"},
    { id: 7, bandaAux: "Ratas + 11Bis", day: "24", month: "Mayo", src: "../../../../../assets/img/concert1.jpg", dia: 31, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Sonata Arctica" },
    { id: 8, bandaAux: "Ratas + 11Bis", day: "18", month: "Marzo", src: "../../../../../assets/img/concert2.jpg", dia: 1, mes: "Abril", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Obituary" }
  ];

}
