import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'cs-modal',
  template: `
    <nz-modal
      #modal
      [nzVisible]="visible"
      [nzTitle]="title"
      [nzWidth]="width"
      [nzClosable]="closable"
      [nzMaskClosable]="maskClosable"
      [nzKeyboard]="keyboard"
      [nzCentered]="centered"
      [nzFooter]="footer"
      (nzOnCancel)="onCancel()"
      (nzOnOk)="onOk()">

      <ng-container *nzModalContent>
        <ng-content></ng-content>
      </ng-container>

      <ng-container *nzModalFooter>
        <ng-content select="[modal-footer]"></ng-content>
      </ng-container>

    </nz-modal>
  `,
  styles: [],
  standalone: false
})
export class CsModalComponent {
  @ViewChild('modal') modal!: NzModalRef;

  @Input() visible = false;
  @Input() title = '';
  @Input() width: number | string = 520;
  @Input() closable = true;
  @Input() maskClosable = true;
  @Input() keyboard = true;
  @Input() centered = false;
  @Input() footer?: string;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<void>();
  @Output() ok = new EventEmitter<void>();

  onCancel(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.cancel.emit();
  }

  onOk(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.ok.emit();
  }

  open(): void {
    this.visible = true;
    this.visibleChange.emit(true);
  }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
