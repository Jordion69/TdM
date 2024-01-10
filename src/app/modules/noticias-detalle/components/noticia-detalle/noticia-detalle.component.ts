import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environments';


@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})

export class NoticiaDetalleComponent implements OnInit {
  noticia: Noticia | null = null;
  linkVideo!: SafeResourceUrl;
  baseUrl = environment.baseUrl;
  constructor(private route: ActivatedRoute, private noticiasService: NoticiasService, public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        // Obtén la noticia seleccionada desde el servicio
        this.noticia = this.noticiasService.getSelectedNoticia();
        if (this.noticia?.link_video) {
          this.linkVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.noticia.link_video);
      }

        // this.linkVideo = this.noticiasService.convertirEnlaceVideo(this.noticia?.link_video);

        console.log("Link_video2 -----> ",  this.noticia?.link_video);
        console.log("Link_video -----> ",  this.linkVideo);
        console.log("Notcia -----> ",  this.noticia);

      }
    });
  }
}

