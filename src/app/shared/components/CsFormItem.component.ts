import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-form-item',
  template: `
    <nz-form-item>
      <!-- Label -->
      <nz-form-label
        *ngIf="label"
        [nzFor]="fieldId"
        [nzRequired]="required"
        [nzSpan]="labelSpan"
      >
        {{ label }}
      </nz-form-label>

      <!-- Form Control -->
      <nz-form-control
        [nzSpan]="controlSpan"
        [nzErrorTip]="errorTip"
      >
        <ng-content></ng-content>
      </nz-form-control>
    </nz-form-item>
  `,
  standalone: false,
  styles: []
})
export class CsFormItemComponent {
  /**
   * Nhãn hiển thị cho form item
   */
  @Input() label?: string;

  /**
   *ID dùng cho trường hợp bạn cần link "label" với "form control"
   */
  @Input() fieldId?: string;
  @Input() required = false;

  /**
   * @description Thông báo lỗi muốn hiển thị, có thể string hoặc TemplateRef
   */
  @Input() errorTip?: string;

  /**
   * @description Thay đổi layout của label và control, tùy theo nhu cầu
   */
  @Input() labelSpan = 6;
  @Input() controlSpan = 18;
  @Input() labelStyle: { [klass: string]: any } = {};
  @Input() controlStyle: { [klass: string]: any } = {};
  @Input() customClass?: string;

}
