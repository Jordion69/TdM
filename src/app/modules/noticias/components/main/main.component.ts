import {  Component, OnInit,  HostListener, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Noticia, Root } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  baseUrl = environment.baseUrl;
  @ViewChild(CarouselComponent) carousel: CarouselComponent | undefined;
  noticiasDia!: Noticia[];
  public  first3: Array<Noticia> = [];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  constructor(private NoticiasService:NoticiasService, private router: Router, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.cargarData();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.refreshCarousel();
  }
  private refreshCarousel() {
    if (this.carousel) {
      this.cdr.detectChanges();
    }
  }
  public cargarData() {
    this.NoticiasService.getFirstThree().subscribe({
      next: (noticias) => {
        let arrayExterno = Object.values(noticias);
        if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
          this.noticiasDia = arrayExterno[0] as Array<Noticia>;
          sessionStorage.setItem('noticiasFirstThree', JSON.stringify(this.noticiasDia));
          this.NoticiasService.cargaPrimerasNoticiasCompletada.next(true);
        } else {
          console.error('Formato de respuesta inesperado:', noticias);
          // Manejar casos donde la respuesta no contiene las noticias esperadas
        }
      },
      error: (error) => {
        console.error('Error al cargar las primeras tres noticias:', error);
        // Manejar el error según sea necesario
      }
    });
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
  mostrarDetallesNoticia(id: string) {
    const numericId = Number(id);
    const noticias = JSON.parse(sessionStorage.getItem('noticiasFirstThree') || '[]');
    const selectedNoticia = noticias.find((noticia: Noticia) => noticia.id === numericId);

    if(selectedNoticia) {
      this.NoticiasService.setSelectedNoticia(selectedNoticia);
      this.router.navigate(['noticias-detalle', numericId]);
    }
  }

}
