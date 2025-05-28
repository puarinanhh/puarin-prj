import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'cs-input',
  template: `
    <input type="text" [placeholder]="placeholder"  (change)="onInputChange($event)" (blur)="onTouched()" nz-input>
  `,
  styles: [],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsInputComponent),
      multi: true,
    },
  ],
})
export class CsInputComponent implements ControlValueAccessor{
  innerValue = '';
  @Input() disabled = false;
  @Input() placeholder = '';


  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(obj: any): void {
    this.innerValue = obj || '';  
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.innerValue = value;
    this.onChange(this.innerValue);
  }
}
