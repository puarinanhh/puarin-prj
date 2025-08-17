import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cs-switch',
  template: `
    <nz-switch
      [nzDisabled]="disabled"
      [nzLoading]="loading"
      [nzSize]="size"
      [ngModel]="innerValue"
      (ngModelChange)="onChange($event)">
    </nz-switch>
  `,
  styles: [],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsSwitchComponent),
      multi: true,
    },
  ],
})
export class CsSwitchComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() size: 'default' | 'small' = 'default';

  innerValue = false;
  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.innerValue = !!obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
