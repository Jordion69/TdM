import { Component, EventEmitter, Output } from '@angular/core';
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
  csrfToken!: string;
  formSubmitted = false;
  submitSuccess = false;
  errorMessage = '';
  showForm = false;
  @Output() formSuccess = new EventEmitter<boolean>();
  @Output() volverEvent = new EventEmitter<void>();

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
      });
    });
  }
  volver() {
    this.volverEvent.emit(); // Emitir el evento
  }
  EnviarEmail() {
    if (this.FormContacto.valid) {
      const formData = {
        _token: this.csrfToken, // Agrega el token CSRF
        ...this.FormContacto.value,
      };

      this.contactService.sendContactForm(formData).subscribe({
        next: (response) => {
          // Manejo del éxito
          this.formSubmitted = true;
          this.submitSuccess = true;
          this.FormContacto.reset();
          setTimeout(() => {
            this.formSubmitted = false;
            this.submitSuccess = false;
            this.formSuccess.emit(true);
          }, 5000);
        },
        error: (error) => {
          // Manejo del error
          this.submitSuccess = false;
          this.errorMessage = 'Error al enviar el formulario. Por favor, inténtalo de nuevo.';
        }
      });
    } else {
      Object.keys(this.FormContacto.controls).forEach(key => {
        const control = this.FormContacto.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
  }

