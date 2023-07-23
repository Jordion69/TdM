


import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isSearchExpanded = false;
  isMenuOpen = false;

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private readonly route: ActivatedRoute, private router: Router) {
    console.log(this.router.url)
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {};

  header_variable = true;

  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = false;
    } else {
      this.header_variable = true;
    }
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: Event): void {
    const target = event.target as HTMLElement | null;
    if (!target || !target.closest('.search')) {
      // Si se hace clic fuera del campo de búsqueda, colapsar el campo.
      this.collapseSearch();
    }
  }

  toggleSearch(): void {
    this.isSearchExpanded = !this.isSearchExpanded;
    if (this.isSearchExpanded) {
      setTimeout(() => this.setFocusOnSearch(), 0);
    }
  }

  expandSearch(): void {
    this.isSearchExpanded = true;
    setTimeout(() => this.setFocusOnSearch(), 0);
  }

  collapseSearch(): void {
    this.isSearchExpanded = false;
  }

  setFocusOnSearch(): void {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      // Lógica para mostrar el menú en pantallas pequeñas.
    } else {
      // Lógica para ocultar el menú en pantallas pequeñas.
    }
  }
}

