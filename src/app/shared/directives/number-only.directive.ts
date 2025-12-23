import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]',
  standalone: true
})
export class NumberOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Remove any non-digit characters
    const newValue = value.replace(/[^0-9]/g, '');

    if (value !== newValue) {
      input.value = newValue;
      input.dispatchEvent(new Event('input'));
    }
  }
}
