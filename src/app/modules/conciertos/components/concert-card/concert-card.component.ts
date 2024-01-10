import { Component, Input, OnInit } from '@angular/core';
import { Concierto, Telonero } from 'src/app/interfaces/conciertos';
import { ConciertosService } from 'src/app/services/conciertos.service';
import { environment } from 'src/environments/environments';
declare var $: any;
@Component({
  selector: 'app-concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.scss']
})
export class ConcertCardComponent implements OnInit {
  baseUrl = environment.baseUrl;
  p: number = 1;
  conciertos: Concierto[] = [];
  currentMonth: string = '';
  showInfo = false;
  teloneros: string[] = [];
  telonerosActuales: any[] = [];
  showTeloneros = false;
  modalImage: string = '';
  showNoResultsMessage: boolean = false;

  constructor(private conciertosService: ConciertosService) {}


  isTeloneroString(telonero: any): boolean {
    return typeof telonero === 'string';
  }


  ngOnInit(): void {
    this.cargarTodosLosConciertos();
    this.conciertosService.filteredConciertos$.subscribe(result => {
      console.log('Datos recibidos en ConcertCardComponent:', result.data);
      if (result.data && result.data.length > 0) {
        this.conciertos = result.data;
        this.conciertos.forEach(concierto => {
          if (concierto.datos_licencia && concierto.datos_licencia.toLowerCase() !== 'void') {
            const partes = concierto.datos_licencia.split(',').map(parte => parte.trim());
            [concierto.author, concierto.authorUrl, concierto.licenseType, concierto.licenseUrl, concierto.modification] = partes;
            concierto.showInfo = false; // Inicializa la propiedad para controlar la visibilidad
          } else {
            concierto.showInfo = false;
          }
        });
        this.showNoResultsMessage = false;
      } else if (result.message) {
        this.showNoResultsMessage = true;
        console.log(result.message);
      } else {
        this.conciertos = [];
        this.showNoResultsMessage = false;
      }
    });
  }
openModal(imageSrc: string) {
  this.modalImage = this.baseUrl + imageSrc;
  console.log(this.modalImage);

  $('#gallery-modal').on('show.bs.modal', () => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const modal = $('#gallery-modal .modal-dialog');
      const maxHeight = window.innerHeight - 40; // 40px para el espacio alrededor
      if (img.height > maxHeight) {
        modal.css('max-height', `${maxHeight}px`);
        modal.css('overflow-y', 'scroll');
      } else {
        modal.css('max-height', 'none');
        modal.css('overflow-y', 'auto');
      }
    };
  });
  $('#gallery-modal').modal('show');
}
toggleInfo(concierto: Concierto): void {
  // Si 'showInfo' no existe en el objeto, inicialízalo aquí.
  if (concierto.showInfo === undefined) {
    concierto.showInfo = false;
  }
  concierto.showInfo = !concierto.showInfo;
}

cargarTodosLosConciertos() {
  this.conciertosService.getAllFromToday().subscribe((data: Concierto[]) => {
    let arrayExterno = Object.values(data);
    if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
      this.conciertos = arrayExterno[0] as Array<Concierto>;
    }
    this.conciertosService.updateFilteredConciertos(this.conciertos)
  });
}
// Asumiendo que Telonero tiene una propiedad 'telonero' que es un string.
showTelonerosDialog(teloneros: Telonero[]) {
  this.telonerosActuales = teloneros.map(t => t.telonero);
  $('#teloneros-modal').modal('show');
}
closeModal () {
  $('#teloneros-modal').modal('hide');
}

replaceUnderscoreAndHyphen(banda: string): string {
  // Utiliza la función replace para reemplazar _ y - con espacios en blanco
  return banda.replace(/[_-]/g, ' ');
}
tipoDeEntrada(linkEntrada: string) {
  return linkEntrada.toLowerCase().includes('gratis') || linkEntrada.toLowerCase().includes('inversa');
}
textoEntrada(linkEntrada:string) {
  if (linkEntrada.toLowerCase().includes('gratis')) {
    return 'Entrada gratuita';
  }
  if (linkEntrada.toLowerCase().includes('inversa')) {
    return 'Taquilla inversa';
  }
  return 'Entrada sin denominación';
}
estadoConcierto(linkEntrada: string): string {
  const entradaLower = linkEntrada.toLowerCase();
  if (entradaLower.includes('anulado')) {
    return 'anulado';
  } else if (entradaLower.includes('aplazado')) {
    return 'aplazado';
  } else {
    return '';
  }
}
}
