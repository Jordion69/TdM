// lazy-image.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
})
export class LazyImageComponent implements OnInit {
  @Input() imageSrc: string ='';
  @Input() alt: string = '';
  imageLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onImageLoad(): void {
    this.imageLoaded = true;
  }
}

