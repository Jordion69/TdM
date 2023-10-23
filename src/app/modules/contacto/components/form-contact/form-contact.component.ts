import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent {
  FormContacto: FormGroup;
  UrlEmail: string = 'http://127.0.0.1:8000/EnviarCorreo';
  csrfToken!: string;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private http: HttpClient) {
    this.FormContacto = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
    });

    // Obtener el token CSRF
    this.http.get('http://127.0.0.1:8000/csrf-cookie').subscribe(() => {
      this.http.get('http://127.0.0.1:8000/api/user').subscribe((response: any) => {
        this.csrfToken = response.csrf_token;
        console.log('Token CSRF recibido:', this.csrfToken);
      });
    });
  }

  EnviarEmail() {
    if (this.FormContacto.valid) {
      const formData = {
        _token: this.csrfToken, // Agrega el token CSRF
        ...this.FormContacto.value,
      };

      this.contactService.sendContactForm(formData).subscribe(
        (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.FormContacto.reset();
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
        }
      );
    }
  }

}
