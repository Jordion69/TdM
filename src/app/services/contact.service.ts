import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Contact } from '../interfaces/contact';
// import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  sendContactForm(formData: any) {
    return this.http.post(`${environment.apiUrl}${environment.endpoints.sendEmail}`, formData);
  }
}
