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
  public cargaPrimerasNoticiasCompletada = new BehaviorSubject<boolean>(false);
  public cargaRestoNoticiasCompletada = new BehaviorSubject<boolean>(false);

  private selectedNoticia: Noticia | null = null;
  constructor(private http: HttpClient) { }

  setSelectedNoticia(noticia: Noticia | null) {
    this.selectedNoticia = noticia;
  }

  getSelectedNoticia(): Noticia | null {
    return this.selectedNoticia;
  }
  setBusquedaActiva(estado: boolean) {
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
        this.noticiasRecibidas = data;
        sessionStorage.setItem(sessionStorageKey, JSON.stringify({ timestamp: new Date().getTime(), data: data }));

        this._busquedaActual.next(this.noticiasRecibidas);
      })
    );
  }
  getNoticiaById(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`${environment.apiUrl}${environment.endpoints.noticias.getById}${id}`);
  }

  public searchNoticias(searchText: string): void {

    forkJoin({
      firstThree: this.getFirstThree(),
      fromFourth: this.getFromFourth()
    }).subscribe(({ firstThree, fromFourth }) => {
      let noticiasFirst: Noticia[] = this.convertirAResultadoArray(firstThree);
      let noticiasSecond: Noticia[] = this.convertirAResultadoArray(fromFourth);

      this.completedArray = [...noticiasFirst, ...noticiasSecond];

      let noticiasFiltradas: Noticia[];
      if (searchText) {
        noticiasFiltradas = this.completedArray.filter(noticia =>
          noticia.titular.toLowerCase().includes(searchText.toLowerCase()) ||
          noticia.texto1.toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        noticiasFiltradas = this.completedArray;
      }
      this._busquedaActual.next(noticiasFiltradas);
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
    this.getFromFourth().subscribe(noticias => {
      this._busquedaActual.next(noticias);
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


