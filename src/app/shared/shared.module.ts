import { NgModule } from "@angular/core";
import { NzZorroAntdModule } from "./nz-zorro-antd.module";
import { CsInputComponent } from "./components/CsInput.component";
import { CsFormItemComponent } from "./components/CsFormItem.component";
import { NzFormModule } from "ng-zorro-antd/form";
import {CsSelectComponent} from './components/CsSelect.component';

@NgModule({
      declarations: [
            CsInputComponent,
            CsFormItemComponent,
            CsSelectComponent
      ],
      imports: [NzFormModule, NzZorroAntdModule],
      exports: [
            NzZorroAntdModule
      ]
})
export class SharedModule {}
