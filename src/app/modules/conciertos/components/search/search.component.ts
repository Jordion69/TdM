import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ConciertosService } from 'src/app/services/conciertos.service';
import { Concierto } from 'src/app/interfaces/conciertos';
import { HttpResponseBase } from '@angular/common/http';

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

  constructor(private conciertosService: ConciertosService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.selectedProvince = "0";
    this,this.cargarData();
    this.cargarProvincias();
  }
  public cargarProvincias() {
    this.conciertosService.getProvincias().subscribe(res => {
      this.provincias = res;
      if (this.provincias.length > 0 && !this.selectedProvince) {
        this.selectedProvince = "0"; // Establecer solo si aún no se ha elegido una provincia
      }
      this.cdr.detectChanges();
    });
  }
  public cargarData() {
    this.conciertosService.getAllFromToday().subscribe((res) => {

    })
  }
  buscarConciertos() {
    this.conciertosService.searchConciertos(this.searchText, this.selectedProvince);
    this.limpiarCampos();
  }

  private limpiarCampos() {
    this.searchText = '';
    this.selectedProvince = "0";
  }
  getNovedades() {
    console.log('Botón de novedades pulsado.');
    this.conciertosService.getLastWeekUpdated().subscribe(response => {
      console.log('Datos recibidos para novedades:', response);
      if (response && response.data) {
        this.conciertosService.updateFilteredConciertos(response.data);
      } else {
        console.log('Formato de datos inesperado: ', response);
      }
      this.limpiarCampos();
    });
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.isFixedHeader = target.scrollTop > 60;
  }
}
