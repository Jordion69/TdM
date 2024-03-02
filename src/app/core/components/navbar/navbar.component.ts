
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  constructor(private readonly route: ActivatedRoute, private router: Router) {
  }



  public onToggleSidenav = () => {
    // Simula un clic en el botón del menú hamburguesa para cerrar el menú
    this.navbarToggler.nativeElement.click();
  };

  header_variable = true;

  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = false;
    } else {
      this.header_variable = true;
    }
  }
}
