import { Component } from '@angular/core';

@Component({
  selector: 'cs-controls-demo',
  template: `
    <div class="demo-container">
      <h2>Custom Controls Demo</h2>

      <!-- Basic Controls -->
      <cs-card title="Basic Controls" [bordered]="true">
        <div class="control-group">
          <h3>Input Controls</h3>

          <div class="control-item">
            <label>Text Input:</label>
            <cs-input placeholder="Enter text..." [(ngModel)]="textValue"></cs-input>
            <span>Value: {{ textValue }}</span>
          </div>

          <div class="control-item">
            <label>Search Input:</label>
            <cs-search-input
              placeholder="Search..."
              [suggestions]="searchSuggestions"
              (search)="onSearch($event)"
              (suggestionSelect)="onSuggestionSelect($event)">
            </cs-search-input>
          </div>

          <div class="control-item">
            <label>Textarea:</label>
            <cs-textarea
              placeholder="Enter description..."
              [autosize]="{ minRows: 3, maxRows: 6 }"
              [(ngModel)]="textareaValue">
            </cs-textarea>
          </div>
        </div>
      </cs-card>

      <!-- Selection Controls -->
      <cs-card title="Selection Controls" [bordered]="true">
        <div class="control-group">
          <h3>Selection Controls</h3>

          <div class="control-item">
            <label>Select:</label>
            <cs-select
              [options]="selectOptions"
              [(ngModel)]="selectedValue"
              placeholder="Choose an option">
            </cs-select>
            <span>Selected: {{ selectedValue }}</span>
          </div>

          <div class="control-item">
            <label>Checkbox:</label>
            <cs-checkbox [(ngModel)]="checkboxValue">Accept terms</cs-checkbox>
            <span>Checked: {{ checkboxValue }}</span>
          </div>

          <div class="control-item">
            <label>Radio Group:</label>
            <cs-radio [(ngModel)]="radioValue">
              <label nz-radio value="option1">Option 1</label>
              <label nz-radio value="option2">Option 2</label>
              <label nz-radio value="option3">Option 3</label>
            </cs-radio>
            <span>Selected: {{ radioValue }}</span>
          </div>

          <div class="control-item">
            <label>Switch:</label>
            <cs-switch [(ngModel)]="switchValue"></cs-switch>
            <span>Enabled: {{ switchValue }}</span>
          </div>
        </div>
      </cs-card>

      <!-- Advanced Controls -->
      <cs-card title="Advanced Controls" [bordered]="true">
        <div class="control-group">
          <h3>Advanced Controls</h3>

          <div class="control-item">
            <label>Date Picker:</label>
            <cs-date-picker [(ngModel)]="dateValue" format="yyyy-MM-dd"></cs-date-picker>
            <span>Date: {{ dateValue | date }}</span>
          </div>

          <div class="control-item">
            <label>Slider:</label>
            <cs-slider
              [(ngModel)]="sliderValue"
              [min]="0"
              [max]="100"
              [step]="5">
            </cs-slider>
            <span>Value: {{ sliderValue }}</span>
          </div>

          <div class="control-item">
            <label>Rate:</label>
            <cs-rate [(ngModel)]="rateValue" [count]="5"></cs-rate>
            <span>Rating: {{ rateValue }}</span>
          </div>

          <div class="control-item">
            <label>Upload:</label>
            <cs-upload
              action="/api/upload"
              [multiple]="true"
              buttonText="Upload Files">
            </cs-upload>
          </div>
        </div>
      </cs-card>

      <!-- Buttons and Actions -->
      <cs-card title="Buttons and Actions" [bordered]="true">
        <div class="control-group">
          <h3>Buttons</h3>

          <div class="button-group">
            <cs-button type="primary" (click)="showModal()">Open Modal</cs-button>
            <cs-button type="default">Default Button</cs-button>
            <cs-button type="dashed">Dashed Button</cs-button>
            <cs-button type="text">Text Button</cs-button>
            <cs-button type="link">Link Button</cs-button>
          </div>
        </div>
      </cs-card>

      <!-- Modal Demo -->
      <cs-modal
        [(visible)]="modalVisible"
        title="Demo Modal"
        [width]="600"
        (ok)="onModalOk()"
        (cancel)="onModalCancel()">

        <p>This is a demo modal showing the custom modal component.</p>
        <p>You can put any content here.</p>

        <div modal-footer>
          <cs-button type="default" (click)="onModalCancel()">Cancel</cs-button>
          <cs-button type="primary" (click)="onModalOk()">OK</cs-button>
        </div>
      </cs-modal>
    </div>
  `,
  styles: [`
    .demo-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .control-group {
      margin-bottom: 20px;
    }

    .control-group h3 {
      margin-bottom: 15px;
      color: #1890ff;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 5px;
    }

    .control-item {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .control-item label {
      min-width: 120px;
      font-weight: 500;
    }

    .control-item span {
      color: #666;
      font-size: 12px;
    }

    .button-group {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    cs-input, cs-textarea, cs-select {
      width: 300px;
    }

    cs-search-input {
      width: 300px;
    }

    cs-date-picker {
      width: 200px;
    }

    cs-slider {
      width: 300px;
    }
  `],
  standalone: false
})
export class CsControlsDemoComponent {
  // Form values
  textValue = '';
  textareaValue = '';
  selectedValue = '';
  checkboxValue = false;
  radioValue = '';
  switchValue = false;
  dateValue: Date | null = null;
  sliderValue = 50;
  rateValue = 0;
  modalVisible = false;

  // Options
  selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  searchSuggestions = [
    'Angular',
    'React',
    'Vue.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS'
  ];

  onSearch(query: string): void {
    console.log('Search query:', query);
    // In a real app, you would filter suggestions based on the query
  }

  onSuggestionSelect(suggestion: string): void {
    console.log('Selected suggestion:', suggestion);
  }

  showModal(): void {
    this.modalVisible = true;
  }

  onModalOk(): void {
    console.log('Modal OK clicked');
    this.modalVisible = false;
  }

  onModalCancel(): void {
    console.log('Modal Cancel clicked');
    this.modalVisible = false;
  }
}
