import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ConciertosService } from 'src/app/services/conciertos.service';
import { GaritosService } from 'src/app/services/garitos.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isFixedHeader: boolean = false;
  searchText: string = '';
  selectedProvince: string = '0';
  provincias: any[] = []; // Variable para almacenar las provincias


  constructor(private garitosService: GaritosService, private conciertosService: ConciertosService, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.selectedProvince = "0";
    this.cargarData();
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
    this.garitosService.getAllGaritos().subscribe((res) => {
      // Procesar la lista completa de garitos aquí si es necesario
    });
  }

  public buscarGaritos() {
    this.garitosService.searchGaritos(this.searchText, this.selectedProvince);
    this.limpiarCampos();
  }
  private limpiarCampos() {
    this.searchText = '';
    this.selectedProvince = "0";
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.isFixedHeader = target.scrollTop > 60;
  }
}
