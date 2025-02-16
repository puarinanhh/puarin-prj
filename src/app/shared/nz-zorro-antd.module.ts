import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NgModule } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzFormModule } from 'ng-zorro-antd/form';


const components = [
  NzBackTopModule,
  NzSpinModule,
  NzModalModule,
  NzAlertModule,
  NzTreeModule,
  NzToolTipModule,
  NzTimelineModule,
  NzTabsModule,
  NzTableModule,
  NzInputModule,
  NzDatePickerModule,
  NzColorPickerModule,
  NzCheckboxModule,
  NzRadioModule,
  NzSelectModule,
  NzSwitchModule,
  NzTimePickerModule,
  NzFormModule
]
@NgModule({
    imports: components,
    exports: components
})
export class NzZorroAntdModule { }
