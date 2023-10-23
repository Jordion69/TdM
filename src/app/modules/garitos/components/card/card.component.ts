import { Component, OnInit } from '@angular/core';
import { GaritosService } from 'src/app/services/garitos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  p: number = 1;
  currentComunidadAutonoma: string = '';
  garitosAPI: Array<any> = [];
  garitos: Array<any> = [
    { id: 1, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 2, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 3, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 4, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 5, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 6, facebook: "", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 7, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 8, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" },
    { id: 9, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Extremadura",src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 10, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Extremadura", src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 11, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Extremadura", src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 12, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Extremadura", src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 13, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Extremadura", src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 14, visitado: 0, facebook: "", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 15, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 16, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" },
    { id: 17, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 1.jpg", title: "Pub Cronos" },
    { id: 18, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 2.jpg", title: "Pub ZZTop" },
    { id: 19, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", src: "../../../../../assets/img/Frame 3.jpg", title: "Pub Valhala" },
    { id: 20, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 4.jpg", title: "Pub 4 ases" },
    { id: 21, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 2.jpg", title: "Pub Cronos" },
    { id: 22, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 3.jpg", title: "Pub ZZTop" },
    { id: 23, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 4.jpg", title: "Pub Valhala" },
    { id: 24, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", src: "../../../../../assets/img/Frame 1.jpg", title: "Pub 4 ases" }
  ];

  constructor(private garitosService: GaritosService) {}
  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData () {
    this.garitosService.getAllGaritos().subscribe((res) => {
      // Cargar la lista completa de garitos en garitos
      this.garitosAPI = res;
    })
  }
}
