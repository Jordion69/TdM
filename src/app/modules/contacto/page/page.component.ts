import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  showForm = false; // Variable para controlar la visualización del formulario

  toggleForm() {
    this.showForm = !this.showForm;
  }
  handleVolver() {
    this.showForm = false; // Oculta el formulario y muestra la imagen
  }
  onFormSuccess(event: boolean) {
    if (event) {
      this.showForm = false; // Oculta el formulario y muestra la imagen
      // Aquí puedes agregar más lógica si es necesario
    }
  }
}
