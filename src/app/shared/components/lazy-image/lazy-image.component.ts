import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  template: `<img [ngClass]="imgClass" [src]="loaded ? fullImageUrl : placeholder" alt="{{ altText }}" loading="lazy" #imageRef (click)="handleClick()">`,
  styles: []
})
export class LazyImageComponent implements OnInit, AfterViewInit {
  @Input() baseUrl: string | undefined;
  @Input() imagePath: string | undefined;
  @Input() altText: string | undefined;
  @Input() imgClass: string = '';
  @Input() clickAction: Function | undefined;

  @ViewChild('imageRef') imageRef: ElementRef | undefined;

  loaded = false;
  fullImageUrl: string | undefined;
  placeholder = 'path/to/your/placeholder/image.jpg'; // Opcional: una imagen de placeholder

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.baseUrl && this.imagePath) {
      this.fullImageUrl = this.baseUrl + this.imagePath;
    }
  }

  ngAfterViewInit(): void {
    this.observeImage();
  }

  observeImage() {
    if (this.imageRef) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            this.loaded = true;
            observer.unobserve(this.imageRef!.nativeElement);
          }
        });
      });
      observer.observe(this.imageRef.nativeElement);
    }
  }

  handleClick() {
    if (this.clickAction) {
      this.clickAction(this.imagePath);
    }
  }
}
