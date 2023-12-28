import { AfterViewInit, Component, Input } from '@angular/core';
import Swiper, { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-slider-text',
  templateUrl: './slider-text.component.html',
  styleUrls: ['./slider-text.component.scss']
})
export class SliderTextComponent implements AfterViewInit {
  @Input() textItems: string[] = [];

  constructor() {
    // Inicializa los módulos necesarios para Swiper
    Swiper.use([Autoplay, FreeMode, Navigation, Pagination]);
  }

  ngAfterViewInit() {
    // Configuración de Swiper para un efecto continuo
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 0, // Sin retraso para un efecto continuo
        disableOnInteraction: false,
      },
      speed: 7000, // Ajusta la velocidad según tus preferencias
      slidesPerView: 'auto',
      freeMode: true,
    });
  }

}
