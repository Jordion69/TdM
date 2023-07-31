import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  isFixedHeader: boolean = false;

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.isFixedHeader = target.scrollTop > 60;
  }

}
