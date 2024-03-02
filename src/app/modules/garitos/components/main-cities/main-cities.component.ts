import {  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Garito } from 'src/app/interfaces/garito';
import { GaritosService } from 'src/app/services/garitos.service';
import { environment } from 'src/environments/environments';
@Component({
  selector: 'app-main-cities',
  templateUrl: './main-cities.component.html',
  styleUrls: ['./main-cities.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCitiesComponent  implements OnInit, AfterViewInit{
  baseUrl = environment.baseUrl;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true, // Habilita los puntos
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  garitos: Array<Garito> = []; // Inicializa el array vacío
  errorMessage: string = '';
  dataLoaded = false;
  constructor(private garitosService: GaritosService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.getGaritos();
  }
  ngAfterViewInit(): void {
    // this.initializeSwiper();
  }
  getGaritos(): void {
    this.garitos = [];
    this.garitosService.getRandomFromCities().subscribe({
      next: (garitos) => {

        let arrayExterno = Object.values(garitos);
        if (arrayExterno.length > 0 && Array.isArray(arrayExterno[0])) {
          this.garitos = arrayExterno[0] as Array<Garito>;
          this.dataLoaded = true;
          this.cdr.detectChanges();
        } else {
          console.error('La estructura de datos no es la esperada:', garitos);
        }
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los garitos. Por favor, intente de nuevo más tarde.';
        console.error('Error al obtener los garitos', error);
      }
    });
  }
}
