import { Component, OnInit } from '@angular/core';
import { Garito } from 'src/app/interfaces/garito';
import { GaritosService } from 'src/app/services/garitos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  p: number = 1;
  currentComunidadAutonoma: string = '';
  garitos: Garito[] = [];
  // garitosAPI: Garito[] = [];


  constructor(private garitosService: GaritosService) {}
  ngOnInit(): void {
    // this.cargarData();
    console.log("length ---->", this.garitos.length);

    this.cargarTodosLosGaritos();

    this.garitosService.filteredGaritos$.subscribe(filtrados => {
      console.log("Filtrados ---> ",typeof filtrados)
      console.log("Filtrados L---> ",filtrados.length)
      // this.garitosAPI = filtrados;
      this.garitos = Object.values(filtrados);
      console.log("length after update ---->", this.garitos[0]);
    });
  }
  cargarTodosLosGaritos(): void {
    this.garitosService.getAllGaritos().subscribe(garitos => {
      let arrayExterno = Object.values(garitos);
      if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
        this.garitos = arrayExterno[0] as Array<Garito>;;
        console.log("Garitos ----->", this.garitos);
      }


      // Si necesitas actualizar el BehaviorSubject con los datos recién cargados.
      this.garitosService.updateFilteredGaritos(this.garitos);
    });
  }



  // garitos: Array<any> = [
  //   { id: 1, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",imagen: "../../../../../assets/img/Frame 1.jpg", nombre_garito: "Pub Cronos" },
  //   { id: 2, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",imagen: "../../../../../assets/img/Frame 2.jpg", nombre_garito: "Pub ZZTop" },
  //   { id: 3, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",imagen: "../../../../../assets/img/Frame 3.jpg", nombre_garito: "Pub Valhala" },
  //   { id: 4, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",imagen: "../../../../../assets/img/Frame 4.jpg", nombre_garito: "Pub 4 ases" },
  //   { id: 5, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",imagen: "../../../../../assets/img/Frame 2.jpg", nombre_garito: "Pub Cronos" },
  //   { id: 6, facebook: "", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",imagen: "../../../../../assets/img/Frame 3.jpg", nombre_garito: "Pub ZZTop" },
  //   { id: 7, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",imagen: "../../../../../assets/img/Frame 4.jpg", nombre_garito: "Pub Valhala" },
  //   { id: 8, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Andalucia",imagen: "../../../../../assets/img/Frame 1.jpg", nombre_garito: "Pub 4 ases" },
  //   { id: 9, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", visitado: 1, comunidad_autonoma: "Extremadura",imagen: "../../../../../assets/img/Frame 1.jpg", nombre_garito: "Pub Cronos" },
  //   { id: 10, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Extremadura", imagen: "../../../../../assets/img/Frame 2.jpg", nombre_garito: "Pub ZZTop" },
  //   { id: 11, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Extremadura", imagen: "../../../../../assets/img/Frame 3.jpg", nombre_garito: "Pub Valhala" },
  //   { id: 12, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Extremadura", imagen: "../../../../../assets/img/Frame 4.jpg", nombre_garito: "Pub 4 ases" },
  //   { id: 13, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Extremadura", imagen: "../../../../../assets/img/Frame 2.jpg", nombre_garito: "Pub Cronos" },
  //   { id: 14, visitado: 0, facebook: "", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", imagen: "../../../../../assets/img/Frame 3.jpg", nombre_garito: "Pub ZZTop" },
  //   { id: 15, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", imagen: "../../../../../assets/img/Frame 4.jpg", nombre_garito: "Pub Valhala" },
  //   { id: 16, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", imagen: "../../../../../assets/img/Frame 1.jpg", nombre_garito: "Pub 4 ases" },
  //   { id: 17, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", imagen: "../../../../../assets/img/Frame 1.jpg", nombre_garito: "Pub Cronos" },
  //   { id: 18, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", imagen: "../../../../../assets/img/Frame 2.jpg", nombre_garito: "Pub ZZTop" },
  //   { id: 19, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cataluña", imagen: "../../../../../assets/img/Frame 3.jpg", nombre_garito: "Pub Valhala" },
  //   { id: 20, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", imagen: "../../../../../assets/img/Frame 4.jpg", nombre_garito: "Pub 4 ases" },
  //   { id: 21, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", imagen: "../../../../../assets/img/Frame 2.jpg", nombre_garito: "Pub Cronos" },
  //   { id: 22, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", imagen: "../../../../../assets/img/Frame 3.jpg", nombre_garito: "Pub ZZTop" },
  //   { id: 23, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", imagen: "../../../../../assets/img/Frame 4.jpg", nombre_garito: "Pub Valhala" },
  //   { id: 24, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", imagen: "../../../../../assets/img/Frame 1.jpg", nombre_garito: "Pub 4 ases" },
  //   { id: 25, visitado: 0, facebook: "https://www.facebook.com/motobombabar?locale=es_ES", instagram: "https://www.instagram.com/hellawaitsmetal/", latitud: "https://maps.app.goo.gl/me2ZgMDKmsBrZ3Yf9", comunidad_autonoma: "Cantabria", imagen: "../../../../../assets/img/Frame 1.jpg", nombre_garito: "Motobomba" }
  // ];
}
