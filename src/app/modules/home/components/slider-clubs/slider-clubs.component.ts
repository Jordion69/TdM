import { Component,  ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Swiper,
  EffectCoverflow,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-slider-clubs',
  templateUrl: './slider-clubs.component.html',
  styleUrls: ['./slider-clubs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderClubsComponent {
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
