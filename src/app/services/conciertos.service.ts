import { Injectable } from '@angular/core';
import { Concierto } from '../interfaces/conciertos';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../interfaces/provincia';


@Injectable({
  providedIn: 'root'
})
export class ConciertosService {

  constructor(private http: HttpClient) { }
  getProvincias() {
    return this.http.get<Provincia[]>('http://127.0.0.1:8000/api/provincias/list');
  }
  getLastWeekUpdates() {
    return this.http.get<Concierto[]>('http://127.0.0.1:8000/api/conciertos-last-week-updates');
  }
}
