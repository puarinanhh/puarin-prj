import { NgModule } from "@angular/core";
import { NzZorroAntdModule } from "./nz-zorro-antd.module";
import { CsInputComponent } from "./controls/CsInput.component";
import { CsFormItemComponent } from "./components/CsFormItem.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { CsSelectComponent } from './controls/CsSelect.component';
import { CsButtonComponent } from "./controls/CsButton.component";
import { CsCheckboxComponent } from "./controls/CsCheckbox.component";
import { CsRadioComponent } from "./controls/CsRadio.component";
import { CsTextareaComponent } from "./controls/CsTextarea.component";
import { CsDatePickerComponent } from "./controls/CsDatePicker.component";
import { CsSwitchComponent } from "./controls/CsSwitch.component";
import { CsSliderComponent } from "./controls/CsSlider.component";
import { CsUploadComponent } from "./controls/CsUpload.component";
import { CsRateComponent } from "./controls/CsRate.component";
import { CsSearchInputComponent } from "./controls/CsSearchInput.component";
import { CsCardComponent } from "./controls/CsCard.component";
import { CsModalComponent } from "./controls/CsModal.component";
import { CsControlsDemoComponent } from "./controls/CsControlsDemo.component";

// Ant Design Modules
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
      declarations: [
            CsInputComponent,
            CsFormItemComponent,
            CsSelectComponent,
            CsButtonComponent,
            CsCheckboxComponent,
            CsRadioComponent,
            CsTextareaComponent,
            CsDatePickerComponent,
            CsSwitchComponent,
            CsSliderComponent,
            CsUploadComponent,
            CsRateComponent,
            CsSearchInputComponent,
            CsCardComponent,
            CsModalComponent,
            CsControlsDemoComponent
      ],
      imports: [
            CommonModule,
            FormsModule,
            NzFormModule,
            NzButtonModule,
            NzIconModule,
            NzSelectModule,
            NzInputModule,
            NzCheckboxModule,
            NzRadioModule,
            NzDatePickerModule,
            NzSwitchModule,
            NzSliderModule,
            NzUploadModule,
            NzRateModule,
            NzCardModule,
            NzModalModule
      ],
      exports: [
            NzZorroAntdModule,
            CsInputComponent,
            CsFormItemComponent,
            CsSelectComponent,
            CsButtonComponent,
            CsCheckboxComponent,
            CsRadioComponent,
            CsTextareaComponent,
            CsDatePickerComponent,
            CsSwitchComponent,
            CsSliderComponent,
            CsUploadComponent,
            CsRateComponent,
            CsSearchInputComponent,
            CsCardComponent,
            CsModalComponent,
            CsControlsDemoComponent
      ]
})
export class SharedModule {}
