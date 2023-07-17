import { Component, AfterViewInit, ViewEncapsulation, Input, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Swiper,
  EffectCoverflow,
} from 'swiper';
SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements AfterViewInit, OnInit{



  ngOnInit(): void {
  }
  TrandingSlider!: Swiper;
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
  //   controlledSwiper: any;
  // setControlledSwiper(swiper: any) {
  //   this.controlledSwiper = swiper;
  // }
  ngAfterViewInit(): void {
    // const TrandingSlider = new Swiper('.tranding-slider', {
    //   effect: 'coverflow',
    //   grabCursor: true,
    //   centeredSlides: true,
    //   loop: true,
    //   slidesPerView: 'auto',
    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 2.5,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   }
    // });
  }
}
