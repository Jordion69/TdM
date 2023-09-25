import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  public getFirstSeven(url:string) {
    return this.http.get(url);
  }

  public getFirstThree(url:string) {
    return this.http.get(url);
  }
  public getFromFourth(url:string) {
    return this.http.get(url);
  }
}
