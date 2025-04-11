import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'cs-input',
  template: `
    <input type="text"  (change)="onInputChange($event)" (blur)="onTouched()" nz-input>
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
  innerValue = false;
  @Input() disabled = false;


  private onChange: (value: boolean) => void = () => {};
  protected onTouched: () => void = () => {};


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(obj: any): void {
    this.innerValue = !!obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.innerValue = checked;
    this.onChange(this.innerValue);
  }
}
