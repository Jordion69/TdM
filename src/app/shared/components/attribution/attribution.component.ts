import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.scss']
})
export class AttributionComponent {
  @Input() author: string = '';
  @Input() authorUrl: string = '';
  @Input() licenseType: string = '';
  @Input() licenseUrl: string = '';
  @Input() modification: string = '';
  showDetails: boolean = false;

  get hasModifications(): boolean {
    return this.modification.toLowerCase().trim() !== 'void' && this.modification.trim() !== '';
  }
}
