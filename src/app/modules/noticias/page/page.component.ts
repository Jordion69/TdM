import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  busquedaActiva: boolean = false;
  constructor(private noticiasService: NoticiasService) {}
  ngOnInit(): void {
    this.noticiasService.busquedaActiva$.subscribe(estado => {
      this.busquedaActiva = estado;
    });
  }



}
