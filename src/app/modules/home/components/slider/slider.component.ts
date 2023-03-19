import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() img1!: string;
  @Input() img2!: string;
  @Input() img3!: string;
  @Input() title1!: string;
  @Input() title2!: string;
  @Input() title3!: string;
  @Input() text1!: string;
  @Input() text2!: string;
  @Input() text3!: string;



}
