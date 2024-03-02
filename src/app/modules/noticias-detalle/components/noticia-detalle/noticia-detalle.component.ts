import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})

export class NoticiaDetalleComponent implements OnInit {
  noticia: Noticia | null = null;
  linkVideo!: SafeResourceUrl;
  baseUrl = environment.baseUrl;
  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    public sanitizer: DomSanitizer,
    private router: Router
    ) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        // Obtén la noticia seleccionada desde el servicio
        const noticiaSeleccionada = this.noticiasService.getSelectedNoticia();
        if (!noticiaSeleccionada) {
          this.noticiasService.getNoticiaById(+id).subscribe({
            next: (noticia) => {
              this.noticia = noticia;
              if (this.noticia?.link_video) {
                this.linkVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.noticia.link_video);
              }
            },
            error: (error) => {
              // Si la API retorna un error (p.ej., 404), redirige al usuario a la página de "Not Found"
              console.error('Error al obtener la noticia:', error);
              this.router.navigateByUrl('/not-found'); // Asegúrate de tener esta ruta configurada en tu AppRoutingModule
            }
          });
        } else {
          // Si la noticia está pre-cargada por el servicio, úsala directamente
          this.noticia = noticiaSeleccionada;
          if (this.noticia?.link_video) {
            this.linkVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.noticia.link_video);
          }
        }
      }
    });
  }
}

