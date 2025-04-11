import { NgModule } from "@angular/core";
import { NzZorroAntdModule } from "./nz-zorro-antd.module";
import { CsInputComponent } from "./controls/CsInput.component";
import { CsFormItemComponent } from "./components/CsFormItem.component";
import { NzFormModule } from "ng-zorro-antd/form";
import {CsSelectComponent} from './controls/CsSelect.component';
import { CsButtonComponent } from "./controls/CsButton.component";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputModule } from "ng-zorro-antd/input";

@NgModule({
      declarations: [
            CsInputComponent,
            CsFormItemComponent,
            CsSelectComponent,
            CsButtonComponent
      ],
      imports: [NzFormModule, NzButtonModule, NzIconModule, NzSelectModule, NzInputModule],
      exports: [
            NzZorroAntdModule,
            CsInputComponent,
            CsFormItemComponent,
            CsSelectComponent,
            CsButtonComponent
      ]
})
export class SharedModule {}
