import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cs-slider',
  template: `
    <nz-slider
      [nzDisabled]="disabled"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzRange]="range"
      [nzMarks]="marks"
      [nzTooltipVisible]="tooltipVisible"
      [ngModel]="innerValue"
      (ngModelChange)="onChange($event)">
    </nz-slider>
  `,
  styles: [],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsSliderComponent),
      multi: true,
    },
  ],
})
export class CsSliderComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() range = false;
  @Input() marks?: { [key: number]: string };
  @Input() tooltipVisible: 'default' | 'always' | 'never' = 'default';

  innerValue: number | number[] = 0;
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
