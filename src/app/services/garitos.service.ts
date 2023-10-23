import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaritosService {
private apiUrl = 'http://127.0.0.1:8000/garitos/all-by-province'
  constructor(private http: HttpClient) {}

  // public getProvincias(url:string) {
  //   return this.http.get(url);
  // }
  public getProvincias(url: string) {
    return this.http.get(url).pipe(
      map((data: any) => Object.values(data))
    );
  }

  public getRandomSeven(url:string) {
    return this.http.get(url);
  }
  public getRandomFromCities(url:string) {
    return this.http.get(url);
  }
  // public getAllByProvinces(url:string) {
  //   return this.http.get(url);
  // }
  public getAllGaritos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  public searchGaritos(searchText: string, selectedProvince: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?searchText=${searchText}&provinceId=${selectedProvince}`);
  }
}
