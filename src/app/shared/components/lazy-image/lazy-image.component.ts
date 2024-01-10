// lazy-image.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
})
export class LazyImageComponent {
  @Input() imageSrc: string ='';
  @Input() alt: string = '';
  imageLoaded: boolean = false;

  constructor() {}

  onImageLoad(): void {
    this.imageLoaded = true;
  }
}

