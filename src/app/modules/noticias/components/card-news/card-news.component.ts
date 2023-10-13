import { Component, OnInit } from '@angular/core';
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

    // Tomar las primeras 100 palabras o menos si el texto contiene menos de 100 palabras
    const first100Words = words.slice(0, 50).join(' ');

    return first100Words;
  }
  // noticias: Array<any> = [
  //   { id: 1,date: "2023/09/25", title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/new1280(1).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  //   { id: 2,date: "2023/09/03", title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/new1280(2).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  //   { id: 3,date: "2023/09/04",title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/new1280(3).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  //   { id: 4,date: "2023/09/05", title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/new1280(1).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  //   { id: 5,date: "2023/09/06", title: "Sonata Arctica nuevo disco el próximo", img: "../../../../../assets/img//new1280(2).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  //   { id: 6,date: "2023/09/07", title: "Sonata Arctica nuevo disco el próximo", img: "../../../../../assets/img/new1280(3).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  //   { id: 7,date: "2023/09/08", title: "Sonata Arctica nuevo disco el próximo", img: "../../../../../assets/img/new1280(1).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  //   { id: 8,date: "2023/09/09", title: "Sonata Arctica nuevo disco el próximo", img: "../../../../../assets/img//new1280(2).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  //   { id: 9,date: "2023/09/04",title: "Iron Maiden gran gira mundial", img: "../../../../../assets/img/new1280(3).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"}
  // ]



}
