import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Contact } from '../interfaces/contact';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
// private urlAPI = string = environment.URL_NEWS_FIRST_7;
//   constructor(private http: HttpClient) { }

//   EnviarEmail(url: string, contact: Contact): Observable<Contact> {
//     return this.hhtp.post<Contact>(url, contact)
//   }
private apiURL = 'http://127.0.0.1:8000/EnviarCorreo';

  constructor(private http: HttpClient) {}

  sendContactForm(formData: any) {
    return this.http.post(this.apiURL, formData);
  }
}
