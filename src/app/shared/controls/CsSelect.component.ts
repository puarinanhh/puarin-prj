import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'cs-select',
  template: `
    <nz-select [nzMode]="mode" [nzDisabled]="disabled" [nzAllowClear]="showAllowClear" [ngModel]="innerValue" (ngModelChange)="onChange($event)">
      <ng-container *ngFor="let item of options">
        <nz-option [nzValue]="item.value" [nzLabel]="item.label"></nz-option>
      </ng-container>
    </nz-select>
  `,
  standalone: false,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsSelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsSelectComponent implements ControlValueAccessor{
  @Input() disabled: boolean = false;
  @Input() mode: 'multiple' | 'default' = 'default';
  @Input() required = false;
  @Input() showAllowClear: boolean = false;
  @Input() options: any[] = [];
  innerValue: any = '';
  protected onChange: (value: any) => void = () => {};
  protected onTouched: () => void = () => {};


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(obj: any): void {
    this.innerValue = obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
};
