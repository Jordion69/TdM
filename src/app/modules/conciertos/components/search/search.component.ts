import { Component } from '@angular/core';
import { ConciertosService } from 'src/app/services/conciertos.service';
import { Concierto } from 'src/app/interfaces/conciertos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  isFixedHeader: boolean = false;
  keyword: string = ''; // Palabra clave
  provincias: any[] = []; // Lista de provincias
  selectedProvincia: string = ''; // Provincia seleccionada

  constructor(private conciertosService: ConciertosService) {}

  ngOnInit() {
    // Obtener la lista de provincias al iniciar el componente
    this.conciertosService.getProvincias().subscribe(data  => {
      this.provincias = data;
      console.log("Data    ----> ", data);

    });
  }
  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.isFixedHeader = target.scrollTop > 60;
  }
  search() {
    if (this.keyword) {
      // Búsqueda por palabra clave
      // Puedes utilizar un pipe para filtrar la lista o enviar una solicitud al servidor
    }

    if (this.selectedProvincia) {
      // Búsqueda por provincia
      // Filtra la lista de conciertos basada en la provincia seleccionada
    }
  }
  getNovedades() {
    this.conciertosService.getLastWeekUpdates().subscribe(data => {
      // Actualizar la lista de conciertos con los resultados
    });
  }
}
