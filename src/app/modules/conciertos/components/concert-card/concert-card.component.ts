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
showTelonerosDialog(teloneros: string[]) {
  this.telonerosActuales  = teloneros;
  $('#teloneros-modal').modal('show');
}

  conciertos: Array<any> = [
    {
      "id": 1,
      "nombre": "Marea_Bilbao",
      "imagen": "../../../../assets/img/concert3.jpg",
      "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
      "banda_principal": "GinetaRock",
      "sala": "Salon Municipal",
      "direccion": "Calle Guarderia 6",
      "poblacion": "La Gineta",
      "provincia": "Albacete",
      "fecha_evento": "2023-09-29",
      "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
      "created_at": "2023-09-30T08:23:29.000000Z",
      "updated_at": null,
      "teloneros": [
        {
          "id": 5,
          "concierto_id": 3,
          "telonero": "Angelus Apatrida",
          "created_at": "2023-09-30T08:24:46.000000Z",
          "updated_at": "2023-09-30T08:28:55.000000Z"
        },
        {
          "id": 6,
          "concierto_id": 3,
          "telonero": "Tierra Santa",
          "created_at": "2023-09-30T08:24:46.000000Z",
          "updated_at": "2023-09-30T08:28:55.000000Z"
        },
        {
          "id": 7,
          "concierto_id": 3,
          "telonero": "Celtibeerian",
          "created_at": "2023-09-30T08:24:46.000000Z",
          "updated_at": "2023-09-30T08:28:55.000000Z"
        },
        {
          "id": 8,
          "concierto_id": 3,
          "telonero": "Infamia",
          "created_at": "2023-09-30T08:24:46.000000Z",
          "updated_at": "2023-09-30T08:28:55.000000Z"
        },
        {
          "id": 9,
          "concierto_id": 3,
          "telonero": "Daeria",
          "created_at": "2023-09-30T08:24:46.000000Z",
          "updated_at": "2023-09-30T08:28:55.000000Z"
        },
        {
          "id": 10,
          "concierto_id": 3,
          "telonero": "Vhaldemar",
          "created_at": "2023-09-30T08:24:46.000000Z",
          "updated_at": "2023-09-30T08:28:55.000000Z"
        },
        {
          "id": 11,
          "concierto_id": 3,
          "telonero": "Sylvania",
          "created_at": "2023-09-30T08:24:46.000000Z",
          "updated_at": "2023-09-30T08:28:55.000000Z"
        }
      ]
      },

  {
  "id": 2,
  "nombre": "Marea_Bilbao",
  "imagen": "../../../../assets/img/concert3.jpg",
  "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
  "banda_principal": "GinetaRock",
  "sala": "Salon Municipal",
  "direccion": "Calle Guarderia 6",
  "poblacion": "La Gineta",
  "provincia": "Albacete",
  "fecha_evento": "2023-09-30",
  "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
  "created_at": "2023-09-30T08:23:29.000000Z",
  "updated_at": null,
  "teloneros": [
    {
      "id": 5,
      "concierto_id": 3,
      "telonero": "Angelus Apatrida",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    },
    {
      "id": 6,
      "concierto_id": 3,
      "telonero": "Tierra Santa",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    },
    {
      "id": 7,
      "concierto_id": 3,
      "telonero": "Celtibeerian",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    },
    {
      "id": 8,
      "concierto_id": 3,
      "telonero": "Infamia",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    },
    {
      "id": 9,
      "concierto_id": 3,
      "telonero": "Daeria",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    },
    {
      "id": 10,
      "concierto_id": 3,
      "telonero": "Vhaldemar",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    },
    {
      "id": 11,
      "concierto_id": 3,
      "telonero": "Sylvania",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    }
  ]
},
{
"id": 3,
"nombre": "Atalaya_Rock",
"imagen": "../../../../assets/img/concert4.jpg",
"alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
"banda_principal": "Tierra Santa",
"sala": "Pabellon Samuel Rodriguez",
"direccion": "Camino Visitación",
"poblacion": "Pozal de las Gallinas",
"provincia": "Valladolid",
"fecha_evento": "2023-10-14",
"link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
"created_at": "2023-09-30T08:23:29.000000Z",
"updated_at": null,
"teloneros": [
  {
    "id": 5,
    "concierto_id": 3,
    "telonero": "Diabulus in Musica",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  },
  {
    "id": 6,
    "concierto_id": 3,
    "telonero": "DelAlma",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  },
  {
    "id": 7,
    "concierto_id": 3,
    "telonero": "BloodHunter",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  },
  {
    "id": 8,
    "concierto_id": 3,
    "telonero": "Grave Noise",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  }
]
},
{
  "id": 4,
  "nombre": "Atalaya_Rock",
  "imagen": "../../../../assets/img/concert4.jpg",
  "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
  "banda_principal": "Tierra Santa",
  "sala": "Pabellon Samuel Rodriguez",
  "direccion": "Camino Visitación",
  "poblacion": "Pozal de las Gallinas",
  "provincia": "Valladolid",
  "fecha_evento": "2023-10-15",
  "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
  "created_at": "2023-09-30T08:23:29.000000Z",
  "updated_at": null,
  "teloneros": [
  {
    "id": 5,
    "concierto_id": 3,
    "telonero": "Diabulus in Musica",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  },
  {
    "id": 6,
    "concierto_id": 3,
    "telonero": "DelAlma",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  },
  {
    "id": 7,
    "concierto_id": 3,
    "telonero": "BloodHunter",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  },
  {
    "id": 8,
    "concierto_id": 3,
    "telonero": "Grave Noise",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  }
  ]
  },
{
"id": 5,
"nombre": "KillingMachine_L'Hospitalet",
"imagen": "../../../../assets/img/concert7.jpg",
"alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
"banda_principal": "Killing Machine",
"sala": "Lennon's club",
"direccion": "Av Fabregada, 91",
"poblacion": "L'hospitalet del Llobregat",
"provincia": "Barcelona",
"fecha_evento": "2023-12-16",
"link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
"created_at": "2023-09-30T08:23:29.000000Z",
"updated_at": null,
"teloneros": [
  {
    "id": 5,
    "concierto_id": 3,
    "telonero": "Conhero",
    "created_at": "2023-09-30T08:24:46.000000Z",
    "updated_at": "2023-09-30T08:28:55.000000Z"
  }
]
},



{
"id": 6,
"nombre": "KillingMachine_L'Hospitalet",
"imagen": "../../../../assets/img/concert7.jpg",
"alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
"banda_principal": "Killing Machine",
"sala": "Lennon's club",
"direccion": "Av Fabregada, 91",
"poblacion": "L'hospitalet del Llobregat",
"provincia": "Barcelona",
"fecha_evento": "2023-12-17",
"link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
"created_at": "2023-09-30T08:23:29.000000Z",
"updated_at": null,
"teloneros": [
{
  "id": 5,
  "concierto_id": 3,
  "telonero": "Conhero",
  "created_at": "2023-09-30T08:24:46.000000Z",
  "updated_at": "2023-09-30T08:28:55.000000Z"
}
]
},
{
  "id": 7,
  "nombre": "",
  "imagen": "../../../../assets/img/concert2.jpg",
  "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
  "banda_principal": "Ciclone",
  "sala": "Rainbow Metal Pub",
  "direccion": "Azkue kalea 1",
  "poblacion": "Granada",
  "provincia": "Granada",
  "fecha_evento": "2024-05-01",
  "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
  "created_at": "2023-09-30T08:23:29.000000Z",
  "updated_at": null,
  "teloneros": [
    {
      "id": 5,
      "concierto_id": 3,
      "telonero": "Bocanada",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    }
  ]
},
{
  "id": 8,
  "nombre": "",
  "imagen": "../../../../assets/img/concert2.jpg",
  "alt_imagen": "Cartel de concierto Marea \"Gira sin riendas\" en Bilbao donde se ven dos caballos con gotero en modo cariñoso",
  "banda_principal": "Ciclone",
  "sala": "Rainbow Metal Pub",
  "direccion": "Azkue kalea 1",
  "poblacion": "Granada",
  "provincia": "Granada",
  "fecha_evento": "2024-05-01",
  "link_entrada": "https://www.madnesslive.es/es/conciertos-en-barcelona/1213-comprar-entrada-abbath-toxic-holocaust-hellripper-barcelona.html",
  "created_at": "2023-09-30T08:23:29.000000Z",
  "updated_at": null,
  "teloneros": [
    {
      "id": 5,
      "concierto_id": 3,
      "telonero": "Bocanada",
      "created_at": "2023-09-30T08:24:46.000000Z",
      "updated_at": "2023-09-30T08:28:55.000000Z"
    }
  ]
}



]
}
