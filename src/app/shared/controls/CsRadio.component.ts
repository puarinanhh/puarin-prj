import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cs-radio',
  template: `
    <nz-radio-group
      [nzDisabled]="disabled"
      [ngModel]="innerValue"
      (ngModelChange)="onChange($event)">
      <ng-content></ng-content>
    </nz-radio-group>
  `,
  styles: [],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsRadioComponent),
      multi: true,
    },
  ],
})
export class CsRadioComponent implements ControlValueAccessor {
  @Input() disabled = false;

  innerValue: any = null;
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
