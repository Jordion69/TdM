import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ConciertosService } from 'src/app/services/conciertos.service';
import { Concierto } from 'src/app/interfaces/conciertos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isFixedHeader: boolean = false;
  searchText: string = '';
  selectedProvince: string = '0';
  provincias: any[] = []; // Provincia seleccionada
  keyword: any;

  constructor(private conciertosService: ConciertosService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cargarProvincias();
  }
  public cargarProvincias() {
    console.log("empezando Province", this.selectedProvince);
    this.conciertosService.getProvincias().subscribe(res => {
      this.provincias = res;
      if (this.provincias.length > 0 && !this.selectedProvince) {
        this.selectedProvince = "0"; // Establecer solo si aún no se ha elegido una provincia
      }
      this.cdr.detectChanges();
      console.log("acabando Province", this.selectedProvince);
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

    if (this.selectedProvince) {
      // Búsqueda por provincia
      // Filtra la lista de conciertos basada en la provincia seleccionada
    }
  }
  buscarConciertosByProvince() {
    
  }
  getNovedades() {
    this.conciertosService.getLastWeekUpdates().subscribe(data => {
      // Actualizar la lista de conciertos con los resultados
    });
  }
}
