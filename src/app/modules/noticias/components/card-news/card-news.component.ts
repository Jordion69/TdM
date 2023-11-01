import { Component, OnInit, HostListener } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';
import { environment } from 'src/environments/environments';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent implements OnInit {
  capturedText: string = '';
  UrlNewsFromFourth: string = environment.URL_NEWS_FROM_4;
  public first3: Array<Noticia> = [];
  noticias: Noticia[] = [];
  numberOfWords = 50;

  constructor(private NoticiasService: NoticiasService, private router: Router) {}

  ngOnInit(): void {
    this.cargarData();
    this.noticias = this.NoticiasService.generateRandomNoticias();
  }

  public cargarData() {
    this.NoticiasService.getFirstThree(this.UrlNewsFromFourth).subscribe(res => {
      // Aquí puedes procesar la respuesta de la solicitud HTTP si es necesario
      console.log(res);
    });
  }

  mostrarDetallesNoticia(id: string) {
    const numericId = Number(id);
    const selectedNoticia = this.NoticiasService.getNoticiaById(numericId);
    if(selectedNoticia) {
      this.NoticiasService.setSelectedNoticia(selectedNoticia);
      this.router.navigate(['noticias-detalle', numericId]);
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1800 && windowWidth >= 1600) {
      this.numberOfWords = 40; // Ajusta este valor según lo que necesites
    } else if (windowWidth <= 1599 && windowWidth >= 1400) {
      this.numberOfWords = 30; // Valor original
    } else if (windowWidth <= 1399 && windowWidth >= 1150) {
      this.numberOfWords = 25; // Valor original
    } else if (windowWidth <= 1149 && windowWidth >= 993) {
      this.numberOfWords = 18; // Valor original
    } else if (windowWidth <= 992 && windowWidth >= 451) {
      this.numberOfWords = 50; // Valor original
    }else if (windowWidth < 450) {
      this.numberOfWords = 30; // Valor original
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
  captureFirst100Words(inputText: string): string {
    // Dividir el texto en palabras utilizando espacios en blanco como delimitadores
    const words = inputText.split(' ');

    // Tomar las primeras 50 palabras o menos si el texto contiene menos de 100 palabras
    const first100Words = words.slice(0, this.numberOfWords).join(' ');

    return first100Words;
  }
}
