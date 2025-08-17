import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'cs-upload',
  template: `
    <nz-upload
      [nzAction]="action"
      [nzAccept]="accept"
      [nzMultiple]="multiple"
      [nzDisabled]="disabled"
      [nzShowUploadList]="showUploadList"
      [nzLimit]="limit"
      [nzSize]="size"
      [nzFileType]="fileType"
      [nzBeforeUpload]="beforeUpload"
      (nzChange)="onUpLoadChange($event)">
      <button nz-button [nzDisabled]="disabled">
        <span nz-icon nzType="upload"></span>
        {{ buttonText }}
      </button>
    </nz-upload>
  `,
  styles: [],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsUploadComponent),
      multi: true,
    },
  ],
})
export class CsUploadComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() action = '';
  @Input() accept = '';
  @Input() multiple = false;
  @Input() showUploadList = true;
  @Input() limit = 0;
  @Input() size = 0;
  @Input() fileType = '';
  @Input() buttonText = 'Click to Upload';
  @Input() beforeUpload: (file: any, fileList: any[]) => boolean | Observable<boolean> = () => of(true);

  @Output() fileChange = new EventEmitter<any>();

  innerValue: any[] = [];
  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.innerValue = obj || [];
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onUpLoadChange(event: any): void {
    this.innerValue = event.fileList;
    this.onChange(this.innerValue);
    this.fileChange.emit(event);
  }
}
