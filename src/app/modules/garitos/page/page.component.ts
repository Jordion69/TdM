import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { GaritosService } from 'src/app/services/garitos.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy{
  textToDisplay: string[] = ['¿Ves algo que no mola en nuestros garitos?', 'Si pillas algún fallo o algo que no suene a puro metal o punk...', '¡Dínoslo ya! Manda un correo a [templodelmetal1969@gmail.com] y únete al mosh.'];
  private routerSubscription: Subscription | undefined;
  constructor(private router: Router, private garitosService: GaritosService) { }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      console.log("NavigationStart", event);

      if (event instanceof NavigationStart && event.navigationTrigger === 'popstate') {
        console.log("entro en el navigation start");
        this.garitosService.resetSearch();
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
