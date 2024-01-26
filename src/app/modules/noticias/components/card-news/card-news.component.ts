import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia';
import { environment } from 'src/environments/environments';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription} from 'rxjs';
import { filter } from 'rxjs/operators';
declare var $: any;


@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent implements OnInit, OnDestroy {
  selectedNoticiaForModal: Noticia | null = null;
  baseUrl = environment.baseUrl;
  capturedText: string = '';
  public first3: Array<Noticia> = [];
  private busquedaSub?: Subscription;
  private routeSub: Subscription
  noticias: Noticia[] = [];
  noticias1: Noticia[] = [];
  numberOfWords = 50;
  titular = 14;

  constructor(private NoticiasService: NoticiasService, private router: Router, private cdr: ChangeDetectorRef) {
    this.routeSub = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(event => {
      // Aquí se hace un casting seguro al tipo NavigationStart
      const navigationEvent = event as NavigationStart;
      if (navigationEvent.navigationTrigger === 'popstate') {
        console.log("Navegación hacia atrás detectada en CardNewsComponent");
        // Restablecer el estado de búsqueda
        this.NoticiasService.resetBusqueda();
        this.NoticiasService.setBusquedaActiva(false);
      }
    });
  }


  ngOnInit(): void {
    this.cargarData();
    console.log(">Noticias cargadas", this.noticias1);

    const ultimaBusqueda = this.NoticiasService.getUltimaBusqueda();
    if (ultimaBusqueda) {
      // Si hay una última búsqueda, realiza esa búsqueda
      console.log("Ultima busqueda", ultimaBusqueda);

      this.NoticiasService.searchNoticias(ultimaBusqueda);
    } else {
      // Si no hay una última búsqueda, carga los datos por defecto
      this.cargarData();
    }
    this.NoticiasService.busquedaActual$.subscribe((data: any) => {
      console.log("Datos recibidos en CardNewsComponent:", data);
      if (Array.isArray(data)) {
        // Si los datos son un array, se asignan directamente
        this.noticias1 = data;
        console.log("Busqueda actual", data);

      } else if (data && data.noticias && Array.isArray(data.noticias)) {
        // Si los datos son un objeto con una propiedad 'noticias'
        this.noticias1 = data.noticias;
        console.log("Noticias data.noticias ----->", this.noticias1);
        this.noticias1.forEach(noticia => {
          console.log('Text1 original:', noticia.text1);
          if (noticia.text1 && noticia.text1.toLowerCase() !== 'void') {
            const partes = noticia.text1.split(',').map((parte: string) => {
              console.log('Parte antes de trim:', parte);
              const parteTrimmed = parte.trim();
              console.log('Parte después de trim:', parteTrimmed);
              return parteTrimmed;
            });
            console.log('Partes después de split y map:', partes);
            if (partes.length === 5) {
              [noticia.author, noticia.authorUrl, noticia.licenseType, noticia.licenseUrl, noticia.modification] = partes;
            } else {
              console.error('Formato inesperado para text1:', noticia.text1);
            }
          }
        });

      } else {
        // Si los datos no son ninguno de los anteriores, puedes manejar el caso o asignar un valor por defecto
        console.log("Formato de datos no reconocido", data);
        console.log("Noticias antes de forEach:", this.noticias1);



        this.noticias1 = [];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.busquedaSub) {
      this.busquedaSub.unsubscribe();
      // this.NoticiasService.searchNoticias("");
      // this.NoticiasService.setBusquedaActiva(true);
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    // this.NoticiasService.resetBusqueda();
    // this.NoticiasService.setBusquedaActiva(false);
  }
  cargarData(): void {
    console.log("cargarData - Cargando noticias...");
    this.NoticiasService.getFromFourth().subscribe({
      next: (noticias) => {
        console.log("cargarData - Noticias recibidas:", noticias);
        let arrayExterno = Object.values(noticias);
        if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
          this.noticias1 = arrayExterno[0] as Array<Noticia>;
          console.log("noticias1", this.noticias1);

        }
        console.log("Noticias recibidades del service", this.noticias1);
      },
      error: (error) => {
        console.error("cargarData - Error al cargar noticias:", error);
        console.error('Error al cargar noticias:', error);
        // Manejar el error según sea necesario
      }
    });
  }

  mostrarDetallesNoticia(id: string) {
    console.log("mostrarDetallesNoticia - ID de noticia seleccionada:", id);
    const numericId = Number(id);
    const selectedNoticia = this.noticias1.find((noticia: Noticia) => noticia.id === numericId);

    if(selectedNoticia) {
      this.NoticiasService.setSelectedNoticia(selectedNoticia);
      this.router.navigate(['noticias-detalle', numericId]);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1800 && windowWidth >= 1600) {
      this.titular = 14;
      this.numberOfWords = 40; // Ajusta este valor según lo que necesites
    } else if (windowWidth <= 1599 && windowWidth >= 1400) {
      this.numberOfWords = 30; // Valor original
      this.titular = 13;
    } else if (windowWidth <= 1399 && windowWidth >= 1150) {
      this.numberOfWords = 25; // Valor original
      this.titular = 11;
    } else if (windowWidth <= 1149 && windowWidth >= 990) {
      this.numberOfWords = 18; // Valor original
      this.titular = 6;
    } else if (windowWidth <= 989 && windowWidth >= 500) {
      this.numberOfWords = 40; // Valor original
      this.titular = 6;
    }else if (windowWidth < 499 && windowWidth >= 440) {
      this.numberOfWords = 20; // Valor original
      this.titular = 5;
    } else if (windowWidth < 439) {
      this.numberOfWords = 15; // Valor original
      this.titular = 5;
    }
    this.cdr.detectChanges();
  }
  abrirModalInfo(noticia: Noticia, event: MouseEvent): void {
      event.stopPropagation();
      this.selectedNoticiaForModal = noticia;
      console.log('selectedNoticiaForModal', this.selectedNoticiaForModal);
      this.cdr.detectChanges();
      $('#licencia-modal').modal('show');
  }
  closeModal () {
    $('#licencia-modal').modal('hide');
  }
  lengthTitular(titular: string): string {
    const words = titular.split(' ');

    // Si la longitud del titular es menor o igual que el límite establecido
    if (words.length <= this.titular) {
      // Devolver el titular como está
      return titular;
    } else {
      // Si el titular es más largo, truncarlo y añadir "..."
      const truncated = words.slice(0, this.titular).join(' ');
      return `${truncated}<strong> ...</strong>`;
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
