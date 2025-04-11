import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button nz-button [nzType]="type">
      <ng-content></ng-content>
    </button>
  `,
  styles: ``,
  standalone: false
})
export class CsButtonComponent {
  @Input() type: 'primary' | 'default' | 'dashed' | 'text' | 'link' = 'default';
  @Input() icon?: string;
}