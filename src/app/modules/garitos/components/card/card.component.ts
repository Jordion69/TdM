import { Component, OnInit } from '@angular/core';
import { Garito } from 'src/app/interfaces/garito';
import { GaritosService } from 'src/app/services/garitos.service';
import { ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environments';
declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  baseUrl = environment.baseUrl;
  showNoResultsMessage: boolean = false;
  p: number = 1;
  currentComunidadAutonoma: string = '';
  garitos: Garito[] = [];
  modalTitle: string = '';
  modalText: any = '';
  modalArray: string[] = [];
Array: any;
  // garitosAPI: Garito[] = [];


  constructor(private garitosService: GaritosService) {}
  ngOnInit(): void {
    this.cargarTodosLosGaritos();
    this.garitosService.filteredGaritos$.subscribe(result => {
      if (result.data && result.data.length > 0) {
        // Si hay datos en la propiedad 'data', los usamos
        this.garitos = result.data;
        this.showNoResultsMessage = false;
      } else if (result.message) {
        this.showNoResultsMessage = true;
        console.log(result.message);
      } else {
        this.garitos = [];
        this.showNoResultsMessage = false;
      }
    });
  }
  handleVolverAtras(): void {
    // Ocultar el mensaje
    this.showNoResultsMessage = false;

    // Otras acciones como navegar a una ruta anterior, etc.
    // Por ejemplo: this.router.navigate(['/ruta-anterior']);
  }
  cargarTodosLosGaritos(): void {
    this.garitosService.getAllGaritos().subscribe(garitos => {
      let arrayExterno = Object.values(garitos);
      if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
        this.garitos = arrayExterno[0] as Array<Garito>;
      }
      this.garitosService.updateFilteredGaritos(this.garitos);
    });
  }
  truncateText(text: string, maxLength: number): { truncated: boolean, text: string } {
    if (text.length > maxLength) {
      return { truncated: true, text: text.substring(0, maxLength) };
    }
    return { truncated: false, text };
  }
  showTextDialog(title: string, text: string | string[]) {
    this.modalTitle = title;
    this.modalText = text;
    $('#gallery-modal').modal('show');
  }
  closeModal () {
    $('#gallery-modal').modal('hide');
  }
  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
