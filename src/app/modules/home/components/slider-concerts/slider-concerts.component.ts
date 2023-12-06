import { Component,  ViewEncapsulation, OnInit } from '@angular/core';
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Swiper,
//   EffectCoverflow,
// } from 'swiper';
// SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

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
  // swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });
  calcularTiempoTranscurrido(fechaStr: string): string {
    const fecha = new Date(fechaStr);
    const fechaActual = new Date();
    const diferencia = fechaActual.getTime() - fecha.getTime();

    const horasTranscurridas = diferencia / 3600000; // 1 hora = 3600000 ms
    const diasTranscurridos = Math.floor(diferencia / 86400000); // 1 día = 86400000 ms

    if (horasTranscurridas < 24) {
      return `Hace ${Math.floor(horasTranscurridas)} horas.`;
    } else {
      return `Hace ${diasTranscurridos} días.`;
    }
  }
  conciertos: Array<any> = [
    { id: 1, bandaAux: "Ratas + 11Bis",fecha_evento: "2023/10/17", day: "2", month: "Marzo", src: "../../../../../assets/img/concert1.jpg", dia: 25, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept" },
    { id: 2, bandaAux: "Ratas + 11Bis",fecha_evento: "2023/10/16", day: "2", month: "Marzo", src: "../../../../../assets/img/concert2.jpg", dia: 26, mes: "Marzo", ciudad: "Granada", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept"},
    { id: 3, bandaAux: "Ratas + 11Bis",fecha_evento: "2023/10/15", day: "25", month: "Marzo", src: "../../../../../assets/img/concert3.jpg", dia: 27, mes: "Marzo", ciudad: "Cordoba", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept"},
    { id: 4, bandaAux: "Ratas + 11Bis",fecha_evento: "2023/10/14", day: "21", month: "Abril", src: "../../../../../assets/img/concert4.jpg", dia: 28, mes: "Marzo", ciudad: "Tarragona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept" },
    { id: 5, bandaAux: "Ratas + 11Bis",fecha_evento: "2023/10/13", day: "23", month: "Marzo", src: "../../../../../assets/img/concert6.jpg", dia: 29, mes: "Marzo", ciudad: "Yecla", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Runnig Wild" },
    { id: 6, bandaAux: "Ratas + 11Bis",fecha_evento: "2023/10/10", day: "22", month: "Marzo", src: "../../../../../assets/img/concert7.jpg", dia: 30, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Legion"},
    { id: 7, bandaAux: "Ratas + 11Bis",fecha_evento: "2023/10/11", day: "24", month: "Mayo", src: "../../../../../assets/img/concert1.jpg", dia: 31, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Sonata Arctica" },
    { id: 8, bandaAux: "Ratas + 11Bis",fecha_evento: "2023/10/12", day: "18", month: "Marzo", src: "../../../../../assets/img/concert2.jpg", dia: 1, mes: "Abril", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Obituary" }
  ];

}
