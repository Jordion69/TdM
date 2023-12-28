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

  private selectedNoticia: Noticia | null = null;
  constructor(private http: HttpClient) { }

  setSelectedNoticia(noticia: Noticia | null) {
    console.log("setSelectedNoticia - Noticia seleccionada:", noticia);
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

  // public getNoticiaFromFourthById(id: number): Noticia | undefined {
  //   // return this.noticiasRecibidas.find(noticia => noticia.id === id);
  //   const noticia = this.noticiasRecibidas.find(n => n.id === id);
  //   console.log("getNoticiaFromFourthById - Buscando ID:", id, "Resultado:", noticia);
  //   return noticia;
  // }

  public searchNoticias(searchText: string): void {
    console.log("searchNoticias - Texto de búsqueda:", searchText);

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


