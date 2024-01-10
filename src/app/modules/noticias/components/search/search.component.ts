import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = '';

  constructor(private noticiasService: NoticiasService) {}


  buscarNoticias() {
    console.log("Texto de búsqueda ingresado:", this.searchText.trim());
    if (this.searchText.trim()) {
      this.noticiasService.searchNoticias(this.searchText.trim());
      this.noticiasService.setBusquedaActiva(true);
      this.limpiarCampos();
    } else {
      this.noticiasService.resetBusqueda();
      this.noticiasService.setBusquedaActiva(false);
    }
    this.noticiasService.setUltimaBusqueda(this.searchText.trim());
  }
  private limpiarCampos() {
    console.log("Limpiando campo de búsqueda");
    this.searchText = '';
  }
}
