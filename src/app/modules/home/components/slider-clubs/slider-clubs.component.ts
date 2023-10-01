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
    { id: 1,date: "2023/09/21",place: "Barcelona", src: "/assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 2,date: "2023/09/22",place: "Tarragona", src: "/assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 3,date: "2023/09/23",place: "Lleida", src: "/assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 4,date: "2023/09/24",place: "Girona", src: "/assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 5,date: "2023/09/25",place: "Murcia", src: "/assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 6,date: "2023/09/26",place: "La rioja", src: "/assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 7,date: "2023/09/27",place: "Burgos", src: "/assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 8,date: "2023/09/28",place: "Canarias", src: "/assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 9,date: "2023/09/29",place: "Soria", src: "/assets/img/Frame 1.jpg", title: "Pub 4 ases" }
  ];
}
