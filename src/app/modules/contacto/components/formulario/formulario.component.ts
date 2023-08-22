import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  FormContacto: any = FormGroup;
  UrlEmail: string = environment.UrlEmail;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.FormContacto = this.fb.group({
      nombre: [''],
    });
  }
  EnviarEmail(): void {
    var formData: any = new FormData();
    formData.append('nombre', this.FormContacto.get('nombre').value);
    this.http
      .post(this.UrlEmail, formData)
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error));
    }
}
