import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cs-rate',
  template: `
    <nz-rate
      [nzDisabled]="disabled"
      [nzCount]="count"
      [nzAllowHalf]="allowHalf"
      [nzAllowClear]="allowClear"
      [nzCharacter]="character"
      [ngModel]="innerValue"
      (ngModelChange)="onChange($event)">
    </nz-rate>
  `,
  styles: [],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsRateComponent),
      multi: true,
    },
  ],
})
export class CsRateComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() count = 5;
  @Input() allowHalf = false;
  @Input() allowClear = true;
  @Input() character?: string;

  innerValue = 0;
  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.innerValue = obj || 0;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
