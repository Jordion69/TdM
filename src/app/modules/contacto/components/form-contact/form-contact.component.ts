import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '../../../../../environments/environments';
@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent {
  FormContacto: any = FormGroup;
  UrlEmail: string = environment.URL_EMAIL;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.FormContacto = this.fb.group({
      nombre: [''],
    });

  }


  EnviarEmail() {
    var formData: any = new FormData();
    formData.append('nombre', this.FormContacto.get('nombre').value);
    this.http
      .post(this.UrlEmail, formData)
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error));
    }
}
