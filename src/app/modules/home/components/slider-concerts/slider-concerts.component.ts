import { Component,  ViewEncapsulation, OnInit } from '@angular/core';
import { Concierto } from 'src/app/interfaces/conciertos';
import { ConciertosService } from 'src/app/services/conciertos.service';
import { environment } from 'src/environments/environments';


@Component({
  selector: 'app-slider-concerts',
  templateUrl: './slider-concerts.component.html',
  styleUrls: ['./slider-concerts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderConcertsComponent {
  baseUrl = environment.baseUrl;
  conciertos: Concierto[] = [];
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
  constructor(private conciertosService: ConciertosService) {}

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

  ngOnInit(): void {
    this.cargarConciertos();
  }

  cargarConciertos(): void {
    this.conciertosService.getFirstTenUpcoming().subscribe({
      next: (conciertos: Concierto[]) => {
        let arrayExterno = Object.values(conciertos);
        if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
          this.conciertos = arrayExterno[0] as Array<Concierto>;
        }
      },
      error: (error) => {
        console.error('Error al cargar los conciertos:', error);
      }
    });
  }
}
