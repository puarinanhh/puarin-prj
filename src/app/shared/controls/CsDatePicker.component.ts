import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cs-date-picker',
  template: `
    <nz-date-picker
      [nzDisabled]="disabled"
      [nzPlaceHolder]="placeholder"
      [nzFormat]="format"
      [nzShowTime]="showTime"
      [nzShowToday]="showToday"
      [ngModel]="innerValue"
      (ngModelChange)="onChange($event)">
    </nz-date-picker>
  `,
  styles: [],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsDatePickerComponent),
      multi: true,
    },
  ],
})
export class CsDatePickerComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() placeholder = 'Select date';
  @Input() format = 'yyyy-MM-dd';
  @Input() showTime = false;
  @Input() showToday = true;

  innerValue: Date | null = null;
  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.innerValue = obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
