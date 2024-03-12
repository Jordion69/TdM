import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Concierto, Telonero } from '../interfaces/conciertos';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../interfaces/provincia';
import { environment } from 'src/environments/environments';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
type ConciertosResult = {
  data: Concierto[];
  message?: string;
}
interface ConciertosResponse {
  data: Concierto[];
}
@Injectable({
  providedIn: 'root'
})
export class ConciertosService {
  private apiUrl = environment.apiUrl;
  private _filteredConciertos = new BehaviorSubject<ConciertosResult>({ data: [] });
  filteredConciertos$ = this._filteredConciertos.asObservable();
  constructor(
    private http: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }
  getProvincias(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(`${this.apiUrl}${environment.endpoints.getProvinceList}`);
  }
  getLastWeekUpdated(): Observable<ConciertosResponse> {
      return this.http.get<ConciertosResponse>(`${this.apiUrl}${environment.endpoints.conciertos.lastWeekUpdates}`)
        .pipe(
          tap(response =>
            console.log('Conciertos obtenidos de getLastWeekUpdated:', response)),
          catchError(error => {
            console.log('Error al obtener conciertos de última semana:', error);
            return of({data: []}); // Retorna un objeto con un arreglo vacío en caso de error
          })
        );
    }
  getFirstTenUpcoming(): Observable<Concierto[]> {
    return this.http.get<Concierto[]>(`${this.apiUrl}${environment.endpoints.conciertos.firstTenUpcoming}`);
  }
  updateFilteredConciertos(conciertos: Concierto[]): void {
    // Crear un objeto GaritosResult con los garitos como la propiedad 'data'
    const result: ConciertosResult = { data: conciertos };
    // Pasar el objeto result al BehaviorSubject
    this._filteredConciertos.next(result);
}
public resetSearch(): void {
  // Restablecer el BehaviorSubject a su estado inicial
  this._filteredConciertos.next({ data: [] });
}
getAllFromToday(): Observable<Concierto[]> {
  const CONCIERTOS_KEY = makeStateKey<Concierto[]>('conciertos-all-from-today');

  if (this.transferState.hasKey(CONCIERTOS_KEY)) {
    const conciertos = this.transferState.get<Concierto[]>(CONCIERTOS_KEY, []);
    this.transferState.remove(CONCIERTOS_KEY);
    return of(conciertos);
  } else {
    return this.http.get<Concierto[]>(`${this.apiUrl}${environment.endpoints.conciertos.allFromToday}`).pipe(
      tap(conciertos => {
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(CONCIERTOS_KEY, conciertos);
        }
      }),
      catchError(error => {
        console.error('Error al obtener conciertos', error);
        return of([]);
      })
    );
  }
}
  searchConciertos(searchText: string, selectedProvince: string): void{
    this.getAllFromToday().subscribe(response => {
      let filteredConciertos: any = Object.values(response)[0];
      if (Array.isArray(filteredConciertos) && searchText) {
        const lowerSearchText = searchText.toLowerCase().trim();
        filteredConciertos = filteredConciertos.filter(concierto => {
        const matchNombre =  concierto.nombre.toLowerCase().trim().includes(lowerSearchText);
        const matchBanda = concierto.banda_principal.toLowerCase().trim().includes(lowerSearchText);
        const matchTeloneros = concierto.teloneros.some((telonero: Telonero) => {
          return telonero.telonero.toLowerCase().trim().includes(lowerSearchText);
        });

        return matchBanda || matchNombre || matchTeloneros;
      });
      }
      if (Array.isArray(filteredConciertos) && selectedProvince !== '0') {
          filteredConciertos = filteredConciertos.filter(concierto => {
          return concierto.provincia == selectedProvince;
          });
      }
      this.updateFilteredConciertos(filteredConciertos);
    })
  }
}
