import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Noticia } from '../interfaces/noticia';
import { Observable, forkJoin, map, of, tap, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private _busquedaActual = new BehaviorSubject<Noticia[]>([]);
  public busquedaActual$ = this._busquedaActual.asObservable();
  private noticiasRecibidas: Noticia[] = [];
  private completedArray: Noticia[] = [];
  private _busquedaActiva = new BehaviorSubject<boolean>(false);
  private ultimaBusqueda: string = '';
  private generateLoremIpsum(): string {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet feugiat purus. Praesent auctor mauris eget purus finibus, a ullamcorper velit euismod. Maecenas quis nunc quis dui cursus fermentum non ac arcu. Vivamus in libero eu ex vestibulum tincidunt. Proin quis tincidunt odio. Nullam eget libero sed justo blandit consectetur. Nulla facilisi. Praesent feugiat enim nec ligula euismod, at pulvinar elit lacinia. Nullam vel felis eros. Vivamus id libero a sapien sollicitudin tincidunt. Suspendisse potenti.";
    return lorem;
  }
  private noticiasGeneradas: Noticia[] = [];
  private selectedNoticia: Noticia | null = null;
  constructor(private http: HttpClient) { }

  generateRandomNoticias(): Noticia[] {
    // Tu código para generar noticias aleatorias
    const imagenes = [
      "../../../../../assets/img/test_imd1.jpg",
      "../../../../../assets/img/test_img2.jpg",
      "../../../../../assets/img/test_img3.jpg"
    ];

    const enlacesVideos = [
      "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog",
      "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog",
      "https://www.youtube.com/embed/UuN6bQOtL-I?si=Xq164kGrFjTjxoog",
    ];
    const loremText = this.generateLoremIpsum();


    // Crea un array de 25 elementos aleatorios
    this.noticiasGeneradas = Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      titular_inicial: `Título inicial ${index + 1}`,
      texto_inicial: `Texto inicial ${index + 1}`,
      foto_inicio: imagenes[index % imagenes.length], // Repite las imágenes
      alt_foto_inicio: `Texto alternativo ${index + 1}`,
      titular: `Título ${index + 1}`,
      texto1: loremText,
      texto2: loremText,
      texto3: loremText,
      texto4: loremText,
      link_video: enlacesVideos[index % enlacesVideos.length], // Repite los enlaces de video
      headline: `Headline ${index + 1}`,
      text1: loremText,
      text2: loremText,
      text3: loremText,
      text4: loremText,
      palabras_clave: `Palabras clave ${index + 1}`,
      created_at: new Date(), // Puedes ajustar la fecha según tus necesidades
      updated_at: new Date(), // Puedes ajustar la fecha según tus necesidades
    }));
    console.log("Noticias generadas ---->",this.noticiasGeneradas);

    return this.noticiasGeneradas;
  }
  setSelectedNoticia(noticia: Noticia | null) {
    this.selectedNoticia = noticia;
  }

  getSelectedNoticia(): Noticia | null {
    return this.selectedNoticia;
  }
  setBusquedaActiva(estado: boolean) {
    console.log("Estado de búsqueda activa cambiado a:", estado);
    this._busquedaActiva.next(estado);
  }
  get busquedaActiva$() {
    return this._busquedaActiva.asObservable();
  }
  setUltimaBusqueda(busqueda: string): void {
    this.ultimaBusqueda = busqueda;
  }

  getUltimaBusqueda(): string {
    return this.ultimaBusqueda;
  }
  getNoticiasGeneradas(): Noticia[] {
    return this.noticiasGeneradas;
  }

  public getFirstSeven() {
    return this.http.get<Noticia[]>(`${environment.apiUrl}${environment.endpoints.noticias.firstSeven}`).pipe(
      tap(noticias => {
        let arrayExterno = Object.values(noticias);
        if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
          this.noticiasRecibidas = arrayExterno[0] as Array<Noticia>;
        }
      })

    );
  }
  public getOnlyNewFromSeven(id: number): Noticia | undefined {
    return this.noticiasRecibidas.find(noticia => noticia.id === id);
  }
  public getFirstThree() {
    return this.http.get<Noticia[]>(`${environment.apiUrl}${environment.endpoints.noticias.firstThree}`);
  }





  public getFromFourth(): Observable<Noticia[]> {
    const sessionStorageKey = 'noticiasFromFourth';
    const storedData = sessionStorage.getItem(sessionStorageKey);
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        const now = new Date().getTime();
        if (now - parsedData.timestamp < 3600000) {
          this.noticiasRecibidas = parsedData.data;
          return of(parsedData.data as Noticia[]);
        }
      } catch (e) {
        console.error('Error al parsear los datos de sessionStorage:', e);
        sessionStorage.removeItem(sessionStorageKey);
      }
    }

    return this.http.get<Noticia[]>(`${environment.apiUrl}${environment.endpoints.noticias.fromFourth}`).pipe(
      tap((data: Noticia[]) => {
        console.log("Datos recibidos en getFromFourth:", data);
        this.noticiasRecibidas = data;
        sessionStorage.setItem(sessionStorageKey, JSON.stringify({ timestamp: new Date().getTime(), data: data }));
        this._busquedaActual.next(this.noticiasRecibidas);
        console.log("busquedaActual actualizado en getFromFourth:", this.noticiasRecibidas);
      })
    );
  }

  public getNoticiaFromFourthById(id: number): Noticia | undefined {
    return this.noticiasRecibidas.find(noticia => noticia.id === id);
  }

  public searchNoticias(searchText: string): void {
    console.log("searchNoticias iniciado con texto de búsqueda:", searchText);

    forkJoin({
      firstThree: this.getFirstThree(),
      fromFourth: this.getFromFourth()
    }).subscribe(({ firstThree, fromFourth }) => {
      let noticiasFirst: Noticia[] = this.convertirAResultadoArray(firstThree);
      let noticiasSecond: Noticia[] = this.convertirAResultadoArray(fromFourth);

      console.log("Noticias de firstThree:", noticiasFirst);
      console.log("Noticias de fromFourth:", noticiasSecond);

      this.completedArray = [...noticiasFirst, ...noticiasSecond];
      console.log("Array combinado antes de la filtración:", this.completedArray);

      let noticiasFiltradas: Noticia[];
      if (searchText) {
        noticiasFiltradas = this.completedArray.filter(noticia =>
          noticia.titular.toLowerCase().includes(searchText.toLowerCase()) ||
          noticia.texto1.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log("Array filtrado con término de búsqueda:", noticiasFiltradas);
      } else {
        noticiasFiltradas = this.completedArray;
        console.log("Array filtrado sin término de búsqueda (completo):", noticiasFiltradas);
      }

      this._busquedaActual.next(noticiasFiltradas);
      console.log("busquedaActual actualizado en searchNoticias:", noticiasFiltradas);
    });
  }



  private convertirAResultadoArray(respuesta: any): Noticia[] {
    if (Array.isArray(respuesta)) {
      return respuesta;
    } else if (respuesta && typeof respuesta === 'object') {
      return respuesta.noticias || [];
    }
    return [];
  }


  private filtrarNoticias(noticias: Noticia[], searchText: string): Noticia[] {
    if (!searchText) {
      return noticias;
    }

    return noticias.filter(noticia =>
      noticia.titular.toLowerCase().includes(searchText.toLowerCase()) ||
      noticia.texto1.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  public resetBusqueda(): void {
    console.log("resetBusqueda iniciado");

    this.getFromFourth().subscribe(noticias => {
      console.log("Noticias obtenidas en resetBusqueda:", noticias);
      this._busquedaActual.next(noticias);
      console.log("busquedaActual actualizado en resetBusqueda con:", noticias);
    });
  }



  public getNoticiaById(id: number): Noticia | undefined {
    return this.noticiasGeneradas.find(noticia => noticia.id === id);
  }

  public convertirEnlaceVideo(url: string): string {
    const videoIdMatch = url.match(/(?:\/|v=)([a-zA-Z0-9_-]+)(\?|\z)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    } else {
      return ''; // O cualquier otro valor predeterminado si la URL no es válida
    }
  }


  // Nuevo método para obtener el enlace de video de la noticia seleccionada
  getEnlaceVideoSeleccionado(): string | null {
    return this.selectedNoticia ? this.selectedNoticia.link_video : null;
  }
}


