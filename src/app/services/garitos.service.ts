import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, delay, of, tap, BehaviorSubject } from 'rxjs';
import { Garito } from '../interfaces/garito';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GaritosService {
  private apiUrl = environment.apiUrl;
  private _filteredGaritos = new BehaviorSubject<Garito[]>([]);
  filteredGaritos$ = this._filteredGaritos.asObservable();
  constructor(private http: HttpClient) {}

  public getRandomSeven(): Observable<Garito[]> {
    console.log('getRandomSeven - Solicitando datos de garitos');
    debugger;
    return this.http.get<Garito[]>(`${this.apiUrl}/garitos/random-seven`).pipe(
      tap(garitos => {
        console.log('getRandomSeven - Datos recibidos', garitos);

      })
    )
  }
  public getRandomFromCities(): Observable<Garito[]> {
    return this.http.get<Garito[]>(`${this.apiUrl}/garitos/random-from-cities`);
  }

  public getAllGaritos(): Observable<Garito[]> {
    const dataFromSession = sessionStorage.getItem('garitos');
    if (dataFromSession) {
      try {
        const parsedData = JSON.parse(dataFromSession);
        const now = new Date().getTime();
        if (now - parsedData.timestamp < 24 * 60 * 60 * 1000 && Array.isArray(parsedData.data)) {
          return of(parsedData.data);
        }
      } catch (e) {
        console.error('Error al parsear datos de sessionStorage:', e);
        // Datos corruptos, así que procedemos a eliminarlos.
        sessionStorage.removeItem('garitos');
      }
    }
    return this.http.get<Garito[]>(`${this.apiUrl}/garitos/all-by-province`).pipe(
      tap(garitos => {
        const dataToStore = {
          timestamp: new Date().getTime(),
          data: garitos
        };
        sessionStorage.setItem('garitos', JSON.stringify(dataToStore));
      })
    );
  }

  updateFilteredGaritos(garitos: Garito[]): void {
    this._filteredGaritos.next(garitos);
  }

  private fakeFilterMethod(searchText: string, selectedProvince: string): any[] {
    // Aquí debería ir tu lógica de filtrado real
    // Por ejemplo, filtrar la lista de todos los garitos basado en searchText y selectedProvince
    // Retornar la lista filtrada
    return []; // Retornar la lista filtrada de garitos
  }
  public searchGaritos(searchText: string, selectedProvince: string) {
    // ... lógica para filtrar garitos
    const filtrados = this.fakeFilterMethod(searchText, selectedProvince);
    this._filteredGaritos.next(filtrados); // Suponiendo que 'filtrados' es tu lista de garitos filtrados
  }
  // public searchGaritos(searchText: string, selectedProvince: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/search?searchText=${searchText}&provinceId=${selectedProvince}`);
  // }
}
