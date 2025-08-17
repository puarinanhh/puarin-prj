import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cs-textarea',
  template: `
    <textarea
      nz-input
      [nzAutosize]="autosize"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [ngModel]="innerValue"
      (ngModelChange)="onChange($event)"
      (blur)="onTouched()">
    </textarea>
  `,
  styles: [],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsTextareaComponent),
      multi: true,
    },
  ],
})
export class CsTextareaComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() autosize: boolean | { minRows?: number; maxRows?: number } = false;

  innerValue = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.innerValue = obj || '';
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
