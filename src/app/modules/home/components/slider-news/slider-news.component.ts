import { Component,  OnInit,  ViewEncapsulation, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-slider-news',
  templateUrl: './slider-news.component.html',
  styleUrls: ['./slider-news.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SliderNewsComponent implements OnInit{
  noticias: Array<Noticia> = [];
  errorMessage: string = '';
  dataLoaded = false;
  @ViewChild('sliderRef', { static: false }) slider: ElementRef | undefined;
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
  constructor(private NoticiasService:NoticiasService, private cdr: ChangeDetectorRef, private router: Router) {}
  ngOnInit(): void {
    if (this.slider && this.slider.nativeElement) {
      setTimeout(() => {
        const sliderElement = this.slider!.nativeElement as HTMLElement;
        sliderElement.style.display = 'none';
        sliderElement.offsetHeight;
        sliderElement.style.display = '';
      }, 1000);

    }
    this.cargarData();
}


  public cargarData(): void {
    console.log('SliderNewsComponent - Solicitando datos');
    this.NoticiasService.getFirstSeven().subscribe({
      next: (noticias) => {
        let arrayExterno = Object.values(noticias);
        if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
          this.noticias = arrayExterno[0] as Array<Noticia>;
          console.log("Primeras siete noticias:", this.noticias);
          sessionStorage.setItem('noticiasFirstSeven', JSON.stringify(this.noticias));
          this.dataLoaded = true;
          this.cdr.detectChanges();
        } else {
          console.error('La estructura de datos no es la esperada:', noticias);
        }
      },
      error: (error) => {
        console.error('Error al cargar las primeras siete noticias:', error);
        this.errorMessage = 'Error al cargar noticias. Por favor, intente de nuevo más tarde.';
      }
    });
  }


// En tu componente de swiper
mostrarDetallesNoticia(id: string) {
  console.log("SliderNewsComponent - mostrarDetallesNoticia - ID de noticia seleccionada:", id);
  const numericId = Number(id);
  const noticias = JSON.parse(sessionStorage.getItem('noticiasFirstSeven') || '[]');
  const selectedNoticia = noticias.find((noticia: Noticia) => noticia.id === numericId);

  if (selectedNoticia) {
    this.NoticiasService.setSelectedNoticia(selectedNoticia);
    this.router.navigate(['noticias-detalle', numericId]);
  }
}



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
}
