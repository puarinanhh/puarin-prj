# Custom Controls Library

This directory contains a collection of custom Angular controls built on top of Ant Design (ng-zorro-antd) components. All form controls implement `ControlValueAccessor` for seamless integration with Angular reactive forms and template-driven forms.

## Available Controls

### Form Controls

#### 1. CsInputComponent
A text input control with enhanced functionality.

**Selector:** `cs-input`

**Properties:**
- `disabled: boolean` - Disables the input
- `placeholder: string` - Placeholder text

**Usage:**
```html
<cs-input placeholder="Enter text..." [(ngModel)]="value"></cs-input>
```

#### 2. CsTextareaComponent
A textarea control with auto-resize functionality.

**Selector:** `cs-textarea`

**Properties:**
- `disabled: boolean` - Disables the textarea
- `placeholder: string` - Placeholder text
- `autosize: boolean | { minRows?: number; maxRows?: number }` - Auto-resize configuration

**Usage:**
```html
<cs-textarea 
  placeholder="Enter description..." 
  [autosize]="{ minRows: 3, maxRows: 6 }"
  [(ngModel)]="description">
</cs-textarea>
```

#### 3. CsSearchInputComponent
A search input with autocomplete suggestions.

**Selector:** `cs-search-input`

**Properties:**
- `disabled: boolean` - Disables the input
- `placeholder: string` - Placeholder text
- `suggestions: string[]` - Array of suggestion options
- `minLength: number` - Minimum characters to trigger search (default: 2)
- `debounceTime: number` - Debounce time in milliseconds (default: 300)

**Events:**
- `search: EventEmitter<string>` - Emitted when search is triggered
- `suggestionSelect: EventEmitter<string>` - Emitted when a suggestion is selected

**Usage:**
```html
<cs-search-input 
  placeholder="Search..." 
  [suggestions]="['Angular', 'React', 'Vue']"
  (search)="onSearch($event)"
  (suggestionSelect)="onSuggestionSelect($event)">
</cs-search-input>
```

#### 4. CsSelectComponent
A select dropdown control.

**Selector:** `cs-select`

**Properties:**
- `disabled: boolean` - Disables the select
- `mode: 'multiple' | 'default'` - Selection mode
- `required: boolean` - Makes the field required
- `showAllowClear: boolean` - Shows clear button
- `options: any[]` - Array of options with `value` and `label` properties

**Usage:**
```html
<cs-select 
  [options]="[{ value: '1', label: 'Option 1' }]"
  [(ngModel)]="selectedValue"
  placeholder="Choose an option">
</cs-select>
```

#### 5. CsCheckboxComponent
A checkbox control.

**Selector:** `cs-checkbox`

**Properties:**
- `disabled: boolean` - Disables the checkbox
- `indeterminate: boolean` - Shows indeterminate state

**Usage:**
```html
<cs-checkbox [(ngModel)]="accepted">Accept terms</cs-checkbox>
```

#### 6. CsRadioComponent
A radio group control.

**Selector:** `cs-radio`

**Properties:**
- `disabled: boolean` - Disables the radio group

**Usage:**
```html
<cs-radio [(ngModel)]="selectedOption">
  <label nz-radio value="option1">Option 1</label>
  <label nz-radio value="option2">Option 2</label>
</cs-radio>
```

#### 7. CsDatePickerComponent
A date picker control.

**Selector:** `cs-date-picker`

**Properties:**
- `disabled: boolean` - Disables the date picker
- `placeholder: string` - Placeholder text
- `format: string` - Date format (default: 'yyyy-MM-dd')
- `showTime: boolean` - Shows time picker
- `showToday: boolean` - Shows today button

**Usage:**
```html
<cs-date-picker 
  [(ngModel)]="dateValue" 
  format="yyyy-MM-dd">
</cs-date-picker>
```

#### 8. CsSwitchComponent
A toggle switch control.

**Selector:** `cs-switch`

**Properties:**
- `disabled: boolean` - Disables the switch
- `loading: boolean` - Shows loading state
- `size: 'default' | 'small'` - Switch size

**Usage:**
```html
<cs-switch [(ngModel)]="enabled"></cs-switch>
```

#### 9. CsSliderComponent
A slider control.

**Selector:** `cs-slider`

**Properties:**
- `disabled: boolean` - Disables the slider
- `min: number` - Minimum value (default: 0)
- `max: number` - Maximum value (default: 100)
- `step: number` - Step value (default: 1)
- `range: boolean` - Range mode
- `marks: { [key: number]: string }` - Mark points
- `tooltipVisible: 'default' | 'always' | 'never'` - Tooltip visibility

**Usage:**
```html
<cs-slider 
  [(ngModel)]="sliderValue" 
  [min]="0" 
  [max]="100" 
  [step]="5">
</cs-slider>
```

#### 10. CsUploadComponent
A file upload control.

**Selector:** `cs-upload`

**Properties:**
- `disabled: boolean` - Disables the upload
- `action: string` - Upload URL
- `accept: string` - Accepted file types
- `multiple: boolean` - Multiple file selection
- `showUploadList: boolean` - Shows upload list
- `limit: number` - File limit
- `size: number` - File size limit
- `fileType: string` - File type filter
- `buttonText: string` - Button text
- `beforeUpload: function` - Before upload handler

**Events:**
- `fileChange: EventEmitter<any>` - Emitted when files change

**Usage:**
```html
<cs-upload 
  action="/api/upload"
  [multiple]="true"
  buttonText="Upload Files">
</cs-upload>
```

#### 11. CsRateComponent
A rating control.

**Selector:** `cs-rate`

**Properties:**
- `disabled: boolean` - Disables the rate
- `count: number` - Number of stars (default: 5)
- `allowHalf: boolean` - Allows half stars
- `allowClear: boolean` - Allows clearing
- `character: string` - Custom character

**Usage:**
```html
<cs-rate [(ngModel)]="rating" [count]="5"></cs-rate>
```

### UI Components

#### 12. CsButtonComponent
A button component with various styles.

**Selector:** `app-button`

**Properties:**
- `type: 'primary' | 'default' | 'dashed' | 'text' | 'link'` - Button type
- `icon: string` - Icon name

**Usage:**
```html
<app-button type="primary" (click)="onClick()">Click me</app-button>
```

#### 13. CsCardComponent
A card component for content display.

**Selector:** `cs-card`

**Properties:**
- `title: string` - Card title
- `extra: string` - Extra content
- `bordered: boolean` - Shows border (default: true)
- `size: 'default' | 'small'` - Card size
- `loading: boolean` - Shows loading state
- `hoverable: boolean` - Hover effect
- `type: 'inner'` - Card type
- `showHeader: boolean` - Shows header (default: true)
- `showFooter: boolean` - Shows footer (default: false)

**Usage:**
```html
<cs-card title="Card Title" [bordered]="true">
  <p>Card content goes here</p>
  <div card-footer>Footer content</div>
</cs-card>
```

#### 14. CsModalComponent
A modal dialog component.

**Selector:** `cs-modal`

**Properties:**
- `visible: boolean` - Modal visibility
- `title: string` - Modal title
- `width: number | string` - Modal width (default: 520)
- `closable: boolean` - Shows close button (default: true)
- `maskClosable: boolean` - Closes on mask click (default: true)
- `keyboard: boolean` - Closes on ESC key (default: true)
- `centered: boolean` - Centers modal (default: false)
- `footer: string` - Footer content

**Events:**
- `visibleChange: EventEmitter<boolean>` - Emitted when visibility changes
- `cancel: EventEmitter<void>` - Emitted on cancel
- `ok: EventEmitter<void>` - Emitted on OK

**Methods:**
- `open()` - Opens the modal
- `close()` - Closes the modal

**Usage:**
```html
<cs-modal 
  [(visible)]="modalVisible" 
  title="Modal Title" 
  [width]="600"
  (ok)="onOk()"
  (cancel)="onCancel()">
  
  <p>Modal content</p>
  
  <div modal-footer>
    <app-button type="default" (click)="onCancel()">Cancel</app-button>
    <app-button type="primary" (click)="onOk()">OK</app-button>
  </div>
</cs-modal>
```

## Demo Component

The `CsControlsDemoComponent` provides a comprehensive demonstration of all custom controls. To use it:

```html
<cs-controls-demo></cs-controls-demo>
```

## Integration

All controls are exported from the `SharedModule`. Import the `SharedModule` in your feature modules to use these controls:

```typescript
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  // ...
})
export class YourFeatureModule { }
```

## Features

- **Form Integration**: All form controls implement `ControlValueAccessor` for seamless integration with Angular forms
- **Ant Design Integration**: Built on top of ng-zorro-antd components for consistent styling
- **TypeScript Support**: Full TypeScript support with proper typing
- **Accessibility**: Follows accessibility best practices
- **Customizable**: Highly customizable through input properties
- **Event Handling**: Comprehensive event handling for user interactions

## Best Practices

1. **Form Validation**: Use with Angular's built-in form validation
2. **Error Handling**: Implement proper error handling for async operations
3. **Accessibility**: Ensure proper labels and ARIA attributes
4. **Performance**: Use `OnPush` change detection strategy when appropriate
5. **Testing**: Write unit tests for custom logic in controls
