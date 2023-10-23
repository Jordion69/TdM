import { Component, OnInit } from '@angular/core';
import { Noticia, Root } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  UrlNewsFirstThree: string = environment.URL_NEWS_FIRST_3;
  noticiasDia!: Noticia[];
  public  first3: Array<Noticia> = [];
  constructor(private NoticiasService:NoticiasService, private router: Router) {}
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
  mostrarDetallesNoticia(id: string) {
    const numericId = Number(id);
    const selectedNoticia = this.NoticiasService.getNoticiaById(numericId);
    if(selectedNoticia) {
      this.NoticiasService.setSelectedNoticia(selectedNoticia);
      this.router.navigate(['noticias-detalle', numericId]);
    }
  }

  noticias: Array<any> = [
    { id: 1,created_at: "2023/09/03", titular: "Iron Maiden gran gira mundial", foto_inicio: "/assets/img/new1280(1).jpg", texto1: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto2: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto3: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto4: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", link_video:  "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog"},
    { id: 2,created_at: "2023/09/02", titular: "Slayer muere bateria", foto_inicio: "/assets/img/new1280(2).jpg", texto1: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto2: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto3: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto4: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", link_video:  "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog"},
    { id: 3,created_at: "2023/09/01", titular: "Twisted sister arrestado cantante", foto_inicio: "/assets/img/new1280(3).jpg", texto1: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto2: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto3: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", texto4: "Después de 47 años de espera llega el mejor disco de la historia del metal. Una mezcla entre el mejor heavy clásico con toques de thrash metal moderno......", link_video:  "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog"},
  ];
}
