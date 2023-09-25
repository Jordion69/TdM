import { Component, OnInit } from '@angular/core';
import { Noticia, Root } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  UrlNewsFirstThree: string = environment.URL_NEWS_FIRST_3;
  noticiasDia!: Noticia[];
  public  first3: Array<Noticia> = [];
  constructor(private NoticiasService:NoticiasService) {}
  ngOnInit(): void {
    this.cargarData();
  }
  public cargarData () {
    this.NoticiasService.getFirstThree(this.UrlNewsFirstThree)
    .subscribe(res => {
      console.log(res);
    })
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
    { id: 1,date: "2023/09/03", title: "Iron Maiden gran gira mundial", img: "/assets/img/new1280(1).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 2,date: "2023/09/02", title: "Slayer muere bateria", img: "/assets/img/new1280(2).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
    { id: 3,date: "2023/09/01", title: "Twisted sister arrestado cantante", img: "/assets/img/new1280(3).jpg", text: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......"},
  ];
}
