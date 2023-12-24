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
  private _filteredGaritos = new BehaviorSubject<GaritosResult>({ data: [] });
  filteredGaritos$ = this._filteredGaritos.asObservable();
  constructor(private http: HttpClient) {}

  public getRandomSeven(): Observable<Garito[]> {
    return this.http.get<Garito[]>(`${this.apiUrl}/garitos/random-seven`).pipe(
      tap(garitos => {
        console.log('getRandomSeven - Datos recibidos', garitos);

      })
    )
  }
  public getRandomFromCities(): Observable<Garito[]> {
    return this.http.get<Garito[]>(`${this.apiUrl}/garitos/random-from-cities`).pipe(
      tap(garitosByCity => {
        console.log('get from city', garitosByCity);

      })
    )
  }
  public resetSearch(): void {
    // Restablecer el BehaviorSubject a su estado inicial
    this._filteredGaritos.next({ data: [] });
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
        }),
        catchError(error => {
            console.error('Error al obtener garitos:', error);
            return of([]); // Devolver un arreglo vacío en caso de error
        })
    );
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
