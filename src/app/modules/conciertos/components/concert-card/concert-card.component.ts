import { Component, Input } from '@angular/core';
import { Concierto } from 'src/app/interfaces/conciertos';
declare var $: any;
@Component({
  selector: 'app-concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.scss']
})
export class ConcertCardComponent {
  p: number = 1;
  currentMonth: string = '';
  showInfo = false;
  teloneros: string[] = [];
  telonerosActuales: any[] = [];
  showTeloneros = false;
  modalImage: string = '';
  isTeloneroString(telonero: any): boolean {
    return typeof telonero === 'string';
  }

openModal(imageSrc: string) {
  this.modalImage = '../../../../assets/img/' + imageSrc;
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
showTelonerosDialog(teloneros: string[]) {
  this.telonerosActuales  = teloneros;
  $('#teloneros-modal').modal('show');
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

  conciertos: Array<any> = [
//     {
//       "id": 1,
//       "nombre": "GinetaRock",
//       "imagen": "../../../../assets/img/concert3.jpg",
//       "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
//       "banda_principal": "GinetaRock",
//       "sala": "Salon Municipal",
//       "direccion": "Calle Guarderia 6",
//       "poblacion": "La Gineta",
//       "provincia": "Albacete",
//       "fecha_evento": "2023-09-29",
//       "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
//       "created_at": "2023-09-30T08:23:29.000000Z",
//       "updated_at": null,
//       "teloneros": [
//         {
//           "id": 5,
//           "concierto_id": 3,
//           "telonero": "Angelus Apatrida",
//           "created_at": "2023-09-30T08:24:46.000000Z",
//           "updated_at": "2023-09-30T08:28:55.000000Z"
//         },
//         {
//           "id": 6,
//           "concierto_id": 3,
//           "telonero": "Tierra Santa",
//           "created_at": "2023-09-30T08:24:46.000000Z",
//           "updated_at": "2023-09-30T08:28:55.000000Z"
//         },
//         {
//           "id": 7,
//           "concierto_id": 3,
//           "telonero": "Celtibeerian",
//           "created_at": "2023-09-30T08:24:46.000000Z",
//           "updated_at": "2023-09-30T08:28:55.000000Z"
//         },
//         {
//           "id": 8,
//           "concierto_id": 3,
//           "telonero": "Infamia",
//           "created_at": "2023-09-30T08:24:46.000000Z",
//           "updated_at": "2023-09-30T08:28:55.000000Z"
//         },
//         {
//           "id": 9,
//           "concierto_id": 3,
//           "telonero": "Daeria",
//           "created_at": "2023-09-30T08:24:46.000000Z",
//           "updated_at": "2023-09-30T08:28:55.000000Z"
//         },
//         {
//           "id": 10,
//           "concierto_id": 3,
//           "telonero": "Vhaldemar",
//           "created_at": "2023-09-30T08:24:46.000000Z",
//           "updated_at": "2023-09-30T08:28:55.000000Z"
//         },
//         {
//           "id": 11,
//           "concierto_id": 3,
//           "telonero": "Sylvania",
//           "created_at": "2023-09-30T08:24:46.000000Z",
//           "updated_at": "2023-09-30T08:28:55.000000Z"
//         }
//       ]
//       },
//   {
//   "id": 2,
//   "nombre": "GinetaRock",
//   "imagen": "../../../../assets/img/concert3.jpg",
//   "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
//   "banda_principal": "GinetaRock",
//   "sala": "Salon Municipal",
//   "direccion": "Calle Guarderia 6",
//   "poblacion": "La Gineta",
//   "provincia": "Albacete",
//   "fecha_evento": "2023-09-30",
//   "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
//   "created_at": "2023-09-30T08:23:29.000000Z",
//   "updated_at": null,
//   "teloneros": [
//     {
//       "id": 5,
//       "concierto_id": 3,
//       "telonero": "Angelus Apatrida",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 6,
//       "concierto_id": 3,
//       "telonero": "Tierra Santa",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 7,
//       "concierto_id": 3,
//       "telonero": "Celtibeerian",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 8,
//       "concierto_id": 3,
//       "telonero": "Infamia",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 9,
//       "concierto_id": 3,
//       "telonero": "Daeria",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 10,
//       "concierto_id": 3,
//       "telonero": "Vhaldemar",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 11,
//       "concierto_id": 3,
//       "telonero": "Sylvania",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     }
//   ]
// },
// {
//   "id": 8,
//   "nombre": "Ciclone_Granada",
//   "imagen": "../../../../assets/img/concert2.jpg",
//   "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
//   "banda_principal": "Ciclone",
//   "sala": "Rainbow Metal Pub",
//   "direccion": "Azkue kalea 1",
//   "poblacion": "Granada",
//   "provincia": "Granada",
//   "fecha_evento": "2023-09-01",
//   "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
//   "created_at": "2023-09-30T08:23:29.000000Z",
//   "updated_at": null,
//   "teloneros": [
//     {
//       "id": 5,
//       "concierto_id": 3,
//       "telonero": "Bocanada",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     }
//   ]
// },
// {
// "id": 3,
// "nombre": "Atalaya_Rock",
// "imagen": "../../../../assets/img/concert4.jpg",
// "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
// "banda_principal": "Atalaya_Rock",
// "sala": "Pabellon Samuel Rodriguez",
// "direccion": "Camino Visitación",
// "poblacion": "Pozal de las Gallinas",
// "provincia": "Valladolid",
// "fecha_evento": "2023-09-30",
// "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
// "created_at": "2023-09-30T08:23:29.000000Z",
// "updated_at": null,
// "teloneros": [
//   {
//     "id": 6,
//     "concierto_id": 3,
//     "telonero": "Tierra Santa",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 5,
//     "concierto_id": 3,
//     "telonero": "Diabulus in Musica",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 6,
//     "concierto_id": 3,
//     "telonero": "DelAlma",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 7,
//     "concierto_id": 3,
//     "telonero": "BloodHunter",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 8,
//     "concierto_id": 3,
//     "telonero": "Grave Noise",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   }
// ]
// },
// {
//   "id": 1,
//   "nombre": "GinetaRock",
//   "imagen": "../../../../assets/img/concert3.jpg",
//   "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
//   "banda_principal": "GinetaRock",
//   "sala": "Salon Municipal",
//   "direccion": "Calle Guarderia 6",
//   "poblacion": "La Gineta",
//   "provincia": "Albacete",
//   "fecha_evento": "2023-09-29",
//   "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
//   "created_at": "2023-10-03T08:23:29.000000Z",
//   "updated_at": null,
//   "teloneros": [
//     {
//       "id": 5,
//       "concierto_id": 3,
//       "telonero": "Angelus Apatrida",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 6,
//       "concierto_id": 3,
//       "telonero": "Tierra Santa",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 7,
//       "concierto_id": 3,
//       "telonero": "Celtibeerian",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 8,
//       "concierto_id": 3,
//       "telonero": "Infamia",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 9,
//       "concierto_id": 3,
//       "telonero": "Daeria",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 10,
//       "concierto_id": 3,
//       "telonero": "Vhaldemar",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     },
//     {
//       "id": 11,
//       "concierto_id": 3,
//       "telonero": "Sylvania",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     }
//   ]
//   },
//   {
//     "id": 1,
//     "nombre": "GinetaRock",
//     "imagen": "../../../../assets/img/concert3.jpg",
//     "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
//     "banda_principal": "GinetaRock",
//     "sala": "Salon Municipal",
//     "direccion": "Calle Guarderia 6",
//     "poblacion": "La Gineta",
//     "provincia": "Albacete",
//     "fecha_evento": "2023-09-29",
//     "link_entrada": "anulado",
//     "created_at": "2023-09-30T08:23:29.000000Z",
//     "updated_at": null,
//     "teloneros": [
//       {
//         "id": 5,
//         "concierto_id": 3,
//         "telonero": "Angelus Apatrida",
//         "created_at": "2023-09-30T08:24:46.000000Z",
//         "updated_at": "2023-09-30T08:28:55.000000Z"
//       },
//       {
//         "id": 6,
//         "concierto_id": 3,
//         "telonero": "Tierra Santa",
//         "created_at": "2023-09-30T08:24:46.000000Z",
//         "updated_at": "2023-09-30T08:28:55.000000Z"
//       },
//       {
//         "id": 7,
//         "concierto_id": 3,
//         "telonero": "Celtibeerian",
//         "created_at": "2023-09-30T08:24:46.000000Z",
//         "updated_at": "2023-09-30T08:28:55.000000Z"
//       },
//       {
//         "id": 8,
//         "concierto_id": 3,
//         "telonero": "Infamia",
//         "created_at": "2023-09-30T08:24:46.000000Z",
//         "updated_at": "2023-09-30T08:28:55.000000Z"
//       },
//       {
//         "id": 9,
//         "concierto_id": 3,
//         "telonero": "Daeria",
//         "created_at": "2023-09-30T08:24:46.000000Z",
//         "updated_at": "2023-09-30T08:28:55.000000Z"
//       },
//       {
//         "id": 10,
//         "concierto_id": 3,
//         "telonero": "Vhaldemar",
//         "created_at": "2023-09-30T08:24:46.000000Z",
//         "updated_at": "2023-09-30T08:28:55.000000Z"
//       },
//       {
//         "id": 11,
//         "concierto_id": 3,
//         "telonero": "Sylvania",
//         "created_at": "2023-09-30T08:24:46.000000Z",
//         "updated_at": "2023-09-30T08:28:55.000000Z"
//       }
//     ]
//     },
// {
// "id": 2,
// "nombre": "GinetaRock",
// "imagen": "../../../../assets/img/concert3.jpg",
// "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
// "banda_principal": "GinetaRock",
// "sala": "Salon Municipal",
// "direccion": "Calle Guarderia 6",
// "poblacion": "La Gineta",
// "provincia": "Albacete",
// "fecha_evento": "2023-09-30",
// "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
// "created_at": "2023-09-30T08:23:29.000000Z",
// "updated_at": null,
// "teloneros": [
//   {
//     "id": 5,
//     "concierto_id": 3,
//     "telonero": "Angelus Apatrida",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 6,
//     "concierto_id": 3,
//     "telonero": "Tierra Santa",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 7,
//     "concierto_id": 3,
//     "telonero": "Celtibeerian",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 8,
//     "concierto_id": 3,
//     "telonero": "Infamia",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 9,
//     "concierto_id": 3,
//     "telonero": "Daeria",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 10,
//     "concierto_id": 3,
//     "telonero": "Vhaldemar",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 11,
//     "concierto_id": 3,
//     "telonero": "Sylvania",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   }
// ]
// },
// {
// "id": 8,
// "nombre": "Ciclone_Granada",
// "imagen": "../../../../assets/img/concert2.jpg",
// "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
// "banda_principal": "Ciclone",
// "sala": "Rainbow Metal Pub",
// "direccion": "Azkue kalea 1",
// "poblacion": "Granada",
// "provincia": "Granada",
// "fecha_evento": "2023-09-01",
// "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
// "created_at": "2023-09-30T08:23:29.000000Z",
// "updated_at": null,
// "teloneros": [
//   {
//     "id": 5,
//     "concierto_id": 3,
//     "telonero": "Bocanada",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   }
// ]
// },
// {
// "id": 3,
// "nombre": "Atalaya_Rock",
// "imagen": "../../../../assets/img/concert4.jpg",
// "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
// "banda_principal": "Atalaya_Rock",
// "sala": "Pabellon Samuel Rodriguez",
// "direccion": "Camino Visitación",
// "poblacion": "Pozal de las Gallinas",
// "provincia": "Valladolid",
// "fecha_evento": "2023-09-30",
// "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
// "created_at": "2023-09-30T08:23:29.000000Z",
// "updated_at": null,
// "teloneros": [
// {
//   "id": 6,
//   "concierto_id": 3,
//   "telonero": "Tierra Santa",
//   "created_at": "2023-09-30T08:24:46.000000Z",
//   "updated_at": "2023-09-30T08:28:55.000000Z"
// },
// {
//   "id": 5,
//   "concierto_id": 3,
//   "telonero": "Diabulus in Musica",
//   "created_at": "2023-09-30T08:24:46.000000Z",
//   "updated_at": "2023-09-30T08:28:55.000000Z"
// },
// {
//   "id": 6,
//   "concierto_id": 3,
//   "telonero": "DelAlma",
//   "created_at": "2023-09-30T08:24:46.000000Z",
//   "updated_at": "2023-09-30T08:28:55.000000Z"
// },
// {
//   "id": 7,
//   "concierto_id": 3,
//   "telonero": "BloodHunter",
//   "created_at": "2023-09-30T08:24:46.000000Z",
//   "updated_at": "2023-09-30T08:28:55.000000Z"
// },
// {
//   "id": 8,
//   "concierto_id": 3,
//   "telonero": "Grave Noise",
//   "created_at": "2023-09-30T08:24:46.000000Z",
//   "updated_at": "2023-09-30T08:28:55.000000Z"
// }
// ]
// },
// {
// "id": 1,
// "nombre": "GinetaRock",
// "imagen": "../../../../assets/img/concert3.jpg",
// "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
// "banda_principal": "GinetaRock",
// "sala": "Salon Municipal",
// "direccion": "Calle Guarderia 6",
// "poblacion": "La Gineta",
// "provincia": "Albacete",
// "fecha_evento": "2023-09-29",
// "link_entrada": "gratis",
// "created_at": "2023-10-03T08:23:29.000000Z",
// "updated_at": null,
// "teloneros": [
//   {
//     "id": 5,
//     "concierto_id": 3,
//     "telonero": "Angelus Apatrida",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 6,
//     "concierto_id": 3,
//     "telonero": "Tierra Santa",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 7,
//     "concierto_id": 3,
//     "telonero": "Celtibeerian",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 8,
//     "concierto_id": 3,
//     "telonero": "Infamia",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 9,
//     "concierto_id": 3,
//     "telonero": "Daeria",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 10,
//     "concierto_id": 3,
//     "telonero": "Vhaldemar",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 11,
//     "concierto_id": 3,
//     "telonero": "Sylvania",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   }
// ]
// },
// {
//   "id": 4,
//   "nombre": "Atalaya_Rock",
//   "imagen": "../../../../assets/img/concert4.jpg",
//   "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
//   "banda_principal": "Atalaya_Rock",
//   "sala": "Pabellon Samuel Rodriguez",
//   "direccion": "Camino Visitación",
//   "poblacion": "Pozal de las Gallinas",
//   "provincia": "Valladolid",
//   "fecha_evento": "2023-10-15",
//   "link_entrada": "taquilla inversa",
//   "created_at": "2023-09-30T08:23:29.000000Z",
//   "updated_at": null,
//   "teloneros": [
//   {
//     "id": 5,
//     "concierto_id": 3,
//     "telonero": "Diabulus in Musica",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 6,
//     "concierto_id": 3,
//     "telonero": "DelAlma",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 7,
//     "concierto_id": 3,
//     "telonero": "BloodHunter",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   },
//   {
//     "id": 8,
//     "concierto_id": 3,
//     "telonero": "Grave Noise",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   }
//   ]
//   },
// {
// "id": 5,
// "nombre": "KillingMachine_L'Hospitalet",
// "imagen": "../../../../assets/img/concert7.jpg",
// "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
// "banda_principal": "Killing Machine",
// "sala": "Lennon's club",
// "direccion": "Av Fabregada, 91",
// "poblacion": "L'hospitalet del Llobregat",
// "provincia": "Barcelona",
// "fecha_evento": "2023-12-16",
// "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
// "created_at": "2023-09-30T08:23:29.000000Z",
// "updated_at": null,
// "teloneros": [
//   {
//     "id": 5,
//     "concierto_id": 3,
//     "telonero": "Conhero",
//     "created_at": "2023-09-30T08:24:46.000000Z",
//     "updated_at": "2023-09-30T08:28:55.000000Z"
//   }
// ]
// },
// {
// "id": 6,
// "nombre": "KillingMachine_L'Hospitalet",
// "imagen": "../../../../assets/img/concert7.jpg",
// "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
// "banda_principal": "Killing Machine",
// "sala": "Lennon's club",
// "direccion": "Av Fabregada, 91",
// "poblacion": "L'hospitalet del Llobregat",
// "provincia": "Barcelona",
// "fecha_evento": "2023-12-17",
// "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
// "created_at": "2023-09-30T08:23:29.000000Z",
// "updated_at": null,
// "teloneros": [
// {
//   "id": 5,
//   "concierto_id": 3,
//   "telonero": "Conhero",
//   "created_at": "2023-09-30T08:24:46.000000Z",
//   "updated_at": "2023-09-30T08:28:55.000000Z"
// }
// ]
// },
// {
//   "id": 7,
//   "nombre": "Ciclone_Granada",
//   "imagen": "../../../../assets/img/concert2.jpg",
//   "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
//   "banda_principal": "Ciclone",
//   "sala": "Rainbow Metal Pub",
//   "direccion": "Azkue kalea 1",
//   "poblacion": "Granada",
//   "provincia": "Granada",
//   "fecha_evento": "2024-05-01",
//   "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
//   "created_at": "2023-09-30T08:23:29.000000Z",
//   "updated_at": null,
//   "teloneros": [
//     {
//       "id": 5,
//       "concierto_id": 3,
//       "telonero": "Bocanada",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     }
//   ]
// },
// {
//   "id": 8,
//   "nombre": "Ciclone_Granada",
//   "imagen": "../../../../assets/img/concert2.jpg",
//   "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
//   "banda_principal": "Ciclone",
//   "sala": "Rainbow Metal Pub",
//   "direccion": "Azkue kalea 1",
//   "poblacion": "Granada",
//   "provincia": "Granada",
//   "fecha_evento": "2024-05-01",
//   "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
//   "created_at": "2023-09-30T08:23:29.000000Z",
//   "updated_at": null,
//   "teloneros": [
//     {
//       "id": 5,
//       "concierto_id": 3,
//       "telonero": "Bocanada",
//       "created_at": "2023-09-30T08:24:46.000000Z",
//       "updated_at": "2023-09-30T08:28:55.000000Z"
//     }
//   ]
// }
{
  "id": 7,
  "nombre": "Gira Tierra Santa Todos Somos Uno",
  "imagen": "uploads/BrwlyCH0op6gieAx9cDdD8nfTilpkd87xEjKfF4B.jpg",
  "alt_imagen": "Logotipo de la banda",
  "banda_principal": "Tierra Santa",
  "sala": "Garage Beat Club",
  "direccion": "Av. Miguel de Cervantes 45",
  "poblacion": "Murcia",
  "provincia": "Murcia",
  "fecha_evento": "2024-01-05",
  "link_entrada": "https://garajebeatclub.compralaentrada.com/eventos/8545/8278/tierra-santa-en-murcia",
  "created_at": "2023-12-12T19:38:26.000000Z",
  "updated_at": "2023-12-12T19:38:26.000000Z",
  "teloneros": []
},
{
  "id": 3,
  "nombre": "Concierto abbath",
  "imagen": "uploads/Yr8bZ2jV4FBi4Lt2MNPKTsdzF2ISDTIhlIGz6XdS.jpg",
  "alt_imagen": "Cara de Abbath con información del concierto",
  "banda_principal": "Abbath",
  "sala": "Salamandra",
  "direccion": "Av del Carrilet 235",
  "poblacion": "L'Hospitalet",
  "provincia": "Barcelona",
  "fecha_evento": "2024-01-09",
  "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
  "created_at": "2023-12-12T18:39:23.000000Z",
  "updated_at": "2023-12-12T18:39:23.000000Z",
  "teloneros": [
      {
          "id": 2,
          "concierto_id": 3,
          "telonero": "Toxic Holocaust",
          "created_at": "2023-12-12T18:41:44.000000Z",
          "updated_at": "2023-12-12T18:41:44.000000Z"
      },
      {
          "id": 3,
          "concierto_id": 3,
          "telonero": "Hellripper",
          "created_at": "2023-12-12T18:42:18.000000Z",
          "updated_at": "2023-12-12T18:42:18.000000Z"
      }
  ]
},
{
  "id": 2,
  "nombre": "Gira angelus apatrida",
  "imagen": "uploads/yLs3cxnKb2EIDFusrP2QBMTa9uHVIjP3IsMcYCmn.jpg",
  "alt_imagen": "Cartel con la banda y fechas gira",
  "banda_principal": "Angelus apatrida",
  "sala": "La vaca",
  "direccion": "calle bilbao 18",
  "poblacion": "Ponferrada",
  "provincia": "León",
  "fecha_evento": "2024-01-12",
  "link_entrada": "https://www.wegow.com/es/conciertos/angelus-apatrida-en-ponferrada",
  "created_at": "2023-12-12T10:41:36.000000Z",
  "updated_at": "2023-12-12T10:41:36.000000Z",
  "teloneros": [
      {
          "id": 5,
          "concierto_id": 2,
          "telonero": "Grave Noise",
          "created_at": "2023-12-12T19:07:00.000000Z",
          "updated_at": "2023-12-12T19:07:00.000000Z"
      },
      {
          "id": 6,
          "concierto_id": 2,
          "telonero": "Death and Legacy",
          "created_at": "2023-12-12T19:07:31.000000Z",
          "updated_at": "2023-12-12T19:07:31.000000Z"
      }
  ]
},
{
  "id": 8,
  "nombre": "X Gabonak In Hell",
  "imagen": "uploads/mfqWsyrUaMNkOlnjDavnKuKdbVt0i65Me0uzgJ1J.jpg",
  "alt_imagen": "Cartel con nombre de los grupos y unos Gremlins punkies",
  "banda_principal": "Vhaldemar",
  "sala": "Larratxo Kultur Etxea",
  "direccion": "Larratxo Pasealekua",
  "poblacion": "Donosti",
  "provincia": "Guipúzcoa",
  "fecha_evento": "2024-01-13",
  "link_entrada": "https://tickets.donostiakultura.eus/selection/event/date?productId=10229152434273&lang=es&_gl=1*1eg4bne*_ga*MTAxMjk4OTEwOC4xNzAyNDEwMTk3*_ga_2Z8BR4V6R9*MTcwMjQxMDE5Ny4xLjAuMTcwMjQxMDIwNi41MS4wLjA.",
  "created_at": "2023-12-12T19:52:31.000000Z",
  "updated_at": "2023-12-12T19:52:31.000000Z",
  "teloneros": [
      {
          "id": 10,
          "concierto_id": 8,
          "telonero": "DIABOLVS IN MVSICA",
          "created_at": "2023-12-12T19:54:02.000000Z",
          "updated_at": "2023-12-12T19:54:02.000000Z"
      },
      {
          "id": 11,
          "concierto_id": 8,
          "telonero": "4 BAJO ZERO",
          "created_at": "2023-12-12T19:54:34.000000Z",
          "updated_at": "2023-12-12T19:54:34.000000Z"
      },
      {
          "id": 12,
          "concierto_id": 8,
          "telonero": "DRAVERNUE",
          "created_at": "2023-12-12T19:55:10.000000Z",
          "updated_at": "2023-12-12T19:55:10.000000Z"
      }
  ]
},
{
  "id": 5,
  "nombre": "Concierto Saratoga",
  "imagen": "uploads/xVh7oNuySR67I669RU6Y3mPgWJp5lha3YfdVBr9o.jpg",
  "alt_imagen": "Imagen de los integrantes del grupo",
  "banda_principal": "Saratoga",
  "sala": "Porta Caeli",
  "direccion": "Mariano de los Cobos 1",
  "poblacion": "Valladolid",
  "provincia": "Valladolid",
  "fecha_evento": "2024-01-20",
  "link_entrada": "https://www.wegow.com/es/conciertos/saratoga-en-valladolid",
  "created_at": "2023-12-12T19:15:35.000000Z",
  "updated_at": "2023-12-12T19:15:35.000000Z",
  "teloneros": []
},
{
  "id": 4,
  "nombre": "Blaze Bayley. Iron Maiden XXX Anniversary",
  "imagen": "uploads/ORWzDu88MPEw8aYRgMDOAiC9Uk7AasyUIiZxG8Ta.jpg",
  "alt_imagen": "Imagen del cantante en una silla eléctrica",
  "banda_principal": "Blaze Bayley",
  "sala": "Wolf",
  "direccion": "Almogàvers 88",
  "poblacion": "Barcelona",
  "provincia": "Barcelona",
  "fecha_evento": "2024-01-24",
  "link_entrada": "https://www.enterticket.es/eventos/blaze-bayley-en-barcelona-272941",
  "created_at": "2023-12-12T18:57:17.000000Z",
  "updated_at": "2023-12-12T18:57:17.000000Z",
  "teloneros": [
      {
          "id": 4,
          "concierto_id": 4,
          "telonero": "Absolva",
          "created_at": "2023-12-12T18:58:06.000000Z",
          "updated_at": "2023-12-12T18:58:06.000000Z"
      }
  ]
},
{
  "id": 9,
  "nombre": "Masters Of Insanity Fest",
  "imagen": "uploads/wfYpTfCrDPtDjR8JZ1KN0CRWjU27ZpR4eprVCP5N.jpg",
  "alt_imagen": "Cartel con nombres de grupos y Robot electrocutando a un heavy",
  "banda_principal": "Reaktion",
  "sala": "Sala Upload",
  "direccion": "Av. de Francesc Ferrer i Guàrdia, 13",
  "poblacion": "Barcelona",
  "provincia": "Barcelona",
  "fecha_evento": "2024-01-27",
  "link_entrada": "https://entradium.com/events/masters-of-insanity-reaktion-violblast-estertor",
  "created_at": "2023-12-12T20:08:18.000000Z",
  "updated_at": "2023-12-12T20:08:18.000000Z",
  "teloneros": [
      {
          "id": 13,
          "concierto_id": 9,
          "telonero": "Violblast",
          "created_at": "2023-12-12T20:09:01.000000Z",
          "updated_at": "2023-12-12T20:09:01.000000Z"
      },
      {
          "id": 14,
          "concierto_id": 9,
          "telonero": "Estertor",
          "created_at": "2023-12-12T20:09:28.000000Z",
          "updated_at": "2023-12-12T20:09:28.000000Z"
      }
  ]
},
{
  "id": 6,
  "nombre": "Concierto Suffocation",
  "imagen": "uploads/7gGy4k8Y1w7fVMALWsxYjjJhWbIY9Q28MIODlqHx.jpg",
  "alt_imagen": "Nombres de los grupos",
  "banda_principal": "Suffocation",
  "sala": "Stage Live",
  "direccion": "Uribitarte Kalea, 8 bajo",
  "poblacion": "Bilbao",
  "provincia": "Vizcaya",
  "fecha_evento": "2024-01-29",
  "link_entrada": "https://acortar.link/Un4EMZ",
  "created_at": "2023-12-12T19:24:30.000000Z",
  "updated_at": "2023-12-12T19:24:30.000000Z",
  "teloneros": [
      {
          "id": 7,
          "concierto_id": 6,
          "telonero": "Sanguisugabogg",
          "created_at": "2023-12-12T19:25:35.000000Z",
          "updated_at": "2023-12-12T19:25:35.000000Z"
      },
      {
          "id": 8,
          "concierto_id": 6,
          "telonero": "Enterprise Earth",
          "created_at": "2023-12-12T19:26:01.000000Z",
          "updated_at": "2023-12-12T19:26:01.000000Z"
      },
      {
          "id": 9,
          "concierto_id": 6,
          "telonero": "Organectomy",
          "created_at": "2023-12-12T19:26:30.000000Z",
          "updated_at": "2023-12-12T19:26:30.000000Z"
      }
  ]
}


]
}
