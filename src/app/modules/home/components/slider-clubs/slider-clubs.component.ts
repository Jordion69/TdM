import { Component,  OnInit,  ViewEncapsulation, ChangeDetectorRef, ElementRef, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Garito } from 'src/app/interfaces/garito';
import { GaritosService } from 'src/app/services/garitos.service';
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderClubsComponent implements OnInit, AfterViewInit{
  @ViewChild('swiperContainer', { static: false }) swiperContainer: ElementRef | undefined;
  private swiper: Swiper | undefined;
  errorMessage: string = '';
  dataLoaded = false;
  swiperConfig: any = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: false,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: { clickable: true } // Moved pagination here as part of swiperConfig
  };
  garitos: Array<Garito> = []; // Inicializa el array vacío
  constructor(private garitosService: GaritosService, private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {
    console.log('ngOnInit - SliderClubsComponent');


    this.getGaritos();
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - SliderClubsComponent');
    this.initializeSwiper();
  }
  getGaritos(): void {
    console.log('getGaritos - Solicitando datos');
    this.garitos = [];
    this.garitosService.getRandomSeven().subscribe({
      next: (garitos) => {
        let arrayExterno = Object.values(garitos);
        if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
          this.garitos = arrayExterno[0] as Array<Garito>;
          this.dataLoaded = true;
          console.log('dataLoaded set to true');
          this.cdr.detectChanges();
        } else {
          console.error('La estructura de datos no es la esperada:', garitos);
        }
      },
      error: (error) => {
        console.log('getGaritos - Error al recibir datos');
        this.errorMessage = 'Error al cargar los garitos. Por favor, intente de nuevo más tarde.';
        console.error('Error al obtener los garitos', error);
      }
    });
  }
  initializeSwiper(): void {
    console.log('initializeSwiper - Intentando inicializar/actualizar');
    if (this.dataLoaded && this.swiperContainer?.nativeElement) {
      console.log('initializeSwiper - Data is loaded, initializing/updating swiper');
      if (this.swiper) {
        this.swiper.update();
      } else {
        this.swiper = new Swiper(this.swiperContainer.nativeElement, this.swiperConfig);
      }
    }
  }
}
