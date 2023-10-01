import { Component,  ViewEncapsulation } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { environment } from 'src/environments/environments';

import SwiperCore, {
  Navigation,
  Pagination,
  Swiper,
  EffectCoverflow,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-slider-news',
  templateUrl: './slider-news.component.html',
  styleUrls: ['./slider-news.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SliderNewsComponent {
  UrlNewsFirstSeven: string = environment.URL_NEWS_FIRST_7;
  noticias1: Noticia[] = [];
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

  public  first3: Array<Noticia> = [];
  constructor(private NoticiasService:NoticiasService) {}
  ngOnInit(): void {
    this.cargarData();
  }
  public cargarData () {
    this.NoticiasService.getFirstSeven('http://127.0.0.1:8000/noticias/first-seven')
    .subscribe(res => {

      console.log("Noticias -> ", res);
    })
  }

  noticias: Array<any> = [
    { id: 1, title: "Iron Maiden gran gira mundial", img: "/assets/img/new1280(1).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 2, title: "Slayer muere bateria", img: "/assets/img/new1280(2).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 3, title: "Twisted sister arrestado cantante", img: "/assets/img/new1280(3).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 4, title: "Judas Priest muere rod", img: "/assets/img/new1280(1).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  ];
}
