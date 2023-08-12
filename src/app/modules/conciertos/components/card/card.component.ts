import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  conciertos: Array<any> = [
    { id: 1, bandaAux: "Ratas + 11Bis", day: "2", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 25, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept" },
    { id: 2, bandaAux: "Ratas + 11Bis", day: "2", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 26, mes: "Marzo", ciudad: "Granada", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept"},
    { id: 3, bandaAux: "Ratas + 11Bis", day: "25", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 27, mes: "Marzo", ciudad: "Cordoba", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept"},
    { id: 4, bandaAux: "Ratas + 11Bis", day: "21", month: "Abril", src: "../../../../../assets/img/conciertos_test.jpg", dia: 28, mes: "Marzo", ciudad: "Tarragona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Accept" },
    { id: 5, bandaAux: "Ratas + 11Bis", day: "23", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 29, mes: "Marzo", ciudad: "Yecla", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Runnig Wild" },
    { id: 6, bandaAux: "Ratas + 11Bis", day: "22", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 30, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Legion"},
    { id: 7, bandaAux: "Ratas + 11Bis", day: "24", month: "Mayo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 31, mes: "Marzo", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Sonata Arctica" },
    { id: 8, bandaAux: "Ratas + 11Bis", day: "18", month: "Marzo", src: "../../../../../assets/img/conciertos_test.jpg", dia: 1, mes: "Abril", ciudad: "Barcelona", Lugar: "Sala Razzmatazz", paginaEntradas: "https://www.madnesslive.es/es/conciertos-en-barcelona/835-comprar-entrada-wasp-barcelona.html", año: 2023, banda: "Obituary/guns.jpg" }
  ];
  modalImage: string = '';

  openModal(imageSrc: string) {
    this.modalImage = imageSrc;
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
}
