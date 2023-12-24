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
  noticias1: Array<Noticia> = [];
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

    // swiperConfig: any = {
    //   infinite: true,
    //   slidesToShow: 3, // Cuantas diapositivas deseas mostrar a la vez. Modifica según tu necesidad.
    //   slidesToScroll: 1, // Cuantas diapositivas desplazar a la vez. Modifica según tu necesidad.
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   dots: true
    // };

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

  // public cargarData () {
  //   this.NoticiasService.getFirstSeven('http://127.0.0.1:8000/noticias/first-seven')
  //   .subscribe(res => {
  //     console.log("Noticias -> ", res);
  //   })
  // }
  public cargarData(): void {
    console.log('getGaritos - Solicitando datos');
    this.noticias1 = [];
    this.NoticiasService.getFirstSeven().subscribe({
      next: (noticias) => {
        let arrayExterno = Object.values(noticias);
        if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
          this.noticias1 = arrayExterno[0] as Array<Noticia>;
          console.log("Siete primeros", this.noticias1);

          this.dataLoaded = true;
          console.log('dataLoaded set to true');
          this.cdr.detectChanges();
        } else {
          console.error('La estructura de datos no es la esperada:', noticias);
        }
      },
      error: (error) => {
        console.log('getGaritos - Error al recibir datos');
        this.errorMessage = 'Error al cargar los garitos. Por favor, intente de nuevo más tarde.';
        console.error('Error al obtener los garitos', error);
      }
    });
  }

// En tu componente de swiper
mostrarDetallesNoticia(id: string) {

  const numericId = Number(id);
  const selectedNoticia = this.NoticiasService.getOnlyNewFromSeven(numericId);
  console.log("hola", selectedNoticia);
  if(selectedNoticia) {
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

  noticias: Array<any> = [
    { id: 1, updated_at: "2023/10/05" , title: "Iron Maiden gran gira mundial", img: "/assets/img/new1280(1).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 2, updated_at: "2023/10/06" , title: "Slayer muere bateria", img: "/assets/img/new1280(2).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 3, updated_at: "2023/10/07" , title: "Twisted sister arrestado cantante", img: "/assets/img/new1280(3).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 4, updated_at: "2023/10/09" , title: "Judas Priest muere rod", img: "/assets/img/new1280(1).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  ];
}
