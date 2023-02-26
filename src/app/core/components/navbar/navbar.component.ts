import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  constructor(private readonly route: ActivatedRoute, private router: Router) {

  }
  ngAfterViewInit(): void {

  }


  ngOnInit(): void {
    this.router.events.pipe(filter ((e): e is NavigationEnd => e instanceof NavigationEnd),
    map(e => {
      console.log("E --->", e);

    }));


  }

  public onToggleSidenav = () => {};

  header_variable = true;
  @HostListener("document:scroll")
  scrollfunction() {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = false;
    } else {
      this.header_variable = true;
    }
  }
}
