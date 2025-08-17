import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-card',
  template: `
    <nz-card
      [nzTitle]="title"
      [nzExtra]="extra"
      [nzBordered]="bordered"
      [nzSize]="size"
      [nzLoading]="loading"
      [nzHoverable]="hoverable"
      [nzType]="type">

      <ng-container *ngIf="showHeader" nz-card-header>
        <ng-content select="[card-header]"></ng-content>
      </ng-container>

      <ng-container nz-card-body>
        <ng-content></ng-content>
      </ng-container>

      <ng-container *ngIf="showFooter" nz-card-footer>
        <ng-content select="[card-footer]"></ng-content>
      </ng-container>

    </nz-card>
  `,
  styles: [],
  standalone: false
})
export class CsCardComponent {
  @Input() title?: string;
  @Input() extra?: string;
  @Input() bordered = true;
  @Input() size: 'default' | 'small' = 'default';
  @Input() loading = false;
  @Input() hoverable = false;
  @Input() type?: 'inner';
  @Input() showHeader = true;
  @Input() showFooter = false;
}
