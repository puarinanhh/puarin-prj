import { Component, forwardRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cs-search-input',
  template: `
    <nz-input-group [nzSuffix]="suffixIcon">
      <input
        type="text"
        nz-input
        [placeholder]="placeholder"
        [disabled]="disabled"
        [ngModel]="innerValue"
        (ngModelChange)="onChange($event)"
        (input)="onInput($event)"
        (blur)="onTouched()"
        (focus)="onFocus()" />
    </nz-input-group>

    <ng-template #suffixIcon>
      <span nz-icon nzType="search"></span>
    </ng-template>

    <div *ngIf="showSuggestions && suggestions.length > 0" class="suggestions-dropdown">
      <div
        *ngFor="let suggestion of suggestions; trackBy: trackByFn"
        class="suggestion-item"
        (click)="selectSuggestion(suggestion)"
        [class.active]="suggestion === selectedSuggestion">
        {{ suggestion }}
      </div>
    </div>
  `,
  styles: [`
    .suggestions-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #d9d9d9;
      border-top: none;
      border-radius: 0 0 6px 6px;
      max-height: 200px;
      overflow-y: auto;
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .suggestion-item {
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .suggestion-item:hover,
    .suggestion-item.active {
      background-color: #f5f5f5;
    }
  `],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsSearchInputComponent),
      multi: true,
    },
  ],
})
export class CsSearchInputComponent implements ControlValueAccessor, OnInit {
  @Input() disabled = false;
  @Input() placeholder = 'Search...';
  @Input() suggestions: string[] = [];
  @Input() minLength = 2;
  @Input() debounceTime = 300;

  @Output() search = new EventEmitter<string>();
  @Output() suggestionSelect = new EventEmitter<string>();

  innerValue = '';
  showSuggestions = false;
  selectedSuggestion: string | null = null;
  private debounceTimer: any;

  onChange = (_: any) => {};
  onTouched = () => {};

  ngOnInit(): void {
    // Initialize component
  }

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

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.innerValue = value;
    this.onChange(value);

    // Clear previous timer
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    // Set new timer for debounced search
    this.debounceTimer = setTimeout(() => {
      if (value.length >= this.minLength) {
        this.search.emit(value);
        this.showSuggestions = true;
      } else {
        this.showSuggestions = false;
      }
    }, this.debounceTime);
  }

  onFocus(): void {
    if (this.innerValue.length >= this.minLength && this.suggestions.length > 0) {
      this.showSuggestions = true;
    }
  }

  selectSuggestion(suggestion: string): void {
    this.innerValue = suggestion;
    this.onChange(suggestion);
    this.showSuggestions = false;
    this.suggestionSelect.emit(suggestion);
  }

  trackByFn(index: number, item: string): string {
    return item;
  }
}
