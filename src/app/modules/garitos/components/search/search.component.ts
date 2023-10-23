import { Component, OnInit } from '@angular/core';
import { GaritosService } from 'src/app/services/garitos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isFixedHeader: boolean = false;
  searchText: string = '';
  selectedProvince: number = 0;
  provincias: any[] = []; // Variable para almacenar las provincias

  constructor(private garitosService: GaritosService) {}
  ngOnInit() {
    this.cargarData();
    this.cargarProvincias();
  }

  public cargarProvincias() {
    this.garitosService.getProvincias('http://127.0.0.1:8000/api/provincias/list')
      .subscribe(res => {
        this.provincias = res; // Almacena las provincias en la variable
      });
  }

  public cargarData() {
    this.garitosService.getAllGaritos().subscribe((res) => {
      // Procesar la lista completa de garitos aquí si es necesario
    });
  }

  public buscarGaritos() {
    this.garitosService.searchGaritos(this.searchText, this.selectedProvince).subscribe((res) => {
      // Procesar la lista filtrada de garitos aquí
    });
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.isFixedHeader = target.scrollTop > 60;
  }
}
