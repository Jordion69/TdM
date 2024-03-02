import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  searchText: string = '';

  constructor(private noticiasService: NoticiasService) {}
  ngOnInit(): void {
    this.buscarNoticiasInicial();
  }
  buscarNoticiasInicial(): void {
    // Verificar si se necesita realizar alguna condición específica aquí
    // Por ejemplo, solo ejecutar en ciertas rutas o verificar algún otro estado
    this.buscarNoticias();
  }

  buscarNoticias() {
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
    this.searchText = '';
  }
}
