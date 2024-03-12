import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, delay, of, tap, BehaviorSubject, catchError } from 'rxjs';
import { Garito } from '../interfaces/garito';
import { environment } from 'src/environments/environments';
type GaritosResult = {
  data: Garito[];
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GaritosService {

  private apiUrl = environment.apiUrl;
  private cache = new Map<string, any>();
  private cacheExpiration = new Map<string, number>();
  private cacheDuration = 300000;
  private _filteredGaritos = new BehaviorSubject<GaritosResult>({ data: [] });
  filteredGaritos$ = this._filteredGaritos.asObservable();
  constructor(private http: HttpClient) {}
  private setCache(key: string, data: any): void {
    this.cache.set(key, data);
    this.cacheExpiration.set(key, Date.now() + this.cacheDuration);
  }

  // private getCache(key: string): any {
  //   if (this.cache.has(key) && this.cacheExpiration.get(key) > Date.now()) {
  //     return of(this.cache.get(key));
  //   }
  //   return null;
  // }

  private getCache(key: string): any {
    const expirationTime = this.cacheExpiration.get(key);

    // Comprobamos si expirationTime es undefined
    if (expirationTime !== undefined && expirationTime > Date.now()) {
      return of(this.cache.get(key)); // Aquí también podrías comprobar si this.cache.get(key) es undefined, aunque no debería ser necesario si la lógica asegura su presencia.
    }
    return null;
  }

  public getRandomSeven(): Observable<Garito[]> {
    return this.http.get<Garito[]>(`${this.apiUrl}/garitos/random-seven`).pipe(
      tap(garitos => {

      })
    )
  }
  public getRandomFromCities(): Observable<Garito[]> {
    return this.http.get<Garito[]>(`${this.apiUrl}/garitos/random-from-cities`).pipe(
      tap(garitosByCity => {
      })
    )
  }
  public resetSearch(): void {
    // Restablecer el BehaviorSubject a su estado inicial
    this._filteredGaritos.next({ data: [] });
}
public getAllGaritos(): Observable<Garito[]> {
  const cacheKey = 'allGaritos';
  const cachedResponse = this.getCache(cacheKey);
  if (cachedResponse) {
    return cachedResponse;
  } else {
    return this.http.get<Garito[]>(`${this.apiUrl}/garitos/all-by-province`).pipe(
      tap(data => this.setCache(cacheKey, data)),
      catchError(error => {
        console.error('Error al obtener garitos:', error);
        return of([]);
      })
    );
  }
}

 updateFilteredGaritos(garitos: Garito[]): void {
    // Crear un objeto GaritosResult con los garitos como la propiedad 'data'
    const result: GaritosResult = { data: garitos };
    // Pasar el objeto result al BehaviorSubject
    this._filteredGaritos.next(result);
}
public searchGaritos(searchText: string, selectedProvince: string): void {
  this.getAllGaritos().subscribe(response => {
      const garitosArray = Object.values(response)[0];

      // Comprobar si garitosArray es realmente un arreglo
      if (Array.isArray(garitosArray)) {
          const filtrados = garitosArray.filter(garito => {
              const garitoString = JSON.stringify(garito).toLowerCase();
              const matchText = searchText ? garitoString.includes(searchText.toLowerCase()) : true;
              const matchProvince = selectedProvince && selectedProvince !== '0' ? garito.provincia === selectedProvince : true;
              return matchText && matchProvince;
          });

          if (filtrados.length === 0) {
              const result: GaritosResult = { data: [], message: "No se encontraron garitos que coincidan con la búsqueda." };
              this._filteredGaritos.next(result);
          } else {
              const result: GaritosResult = { data: filtrados };
              this._filteredGaritos.next(result);
          }
      } else {
          console.error('Formato de respuesta inesperado:', garitosArray);
          const result: GaritosResult = { data: [], message: "Error en los datos recibidos." };
          this._filteredGaritos.next(result);
      }
  });
}
}
