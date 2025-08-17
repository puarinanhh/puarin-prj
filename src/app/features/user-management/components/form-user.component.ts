import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { addUser, getUserById } from "../state/user.actions";
import { selectAddUserSuccess, selectSelectedUser} from "../state/user.selectors";
import { Observable } from "rxjs";
import { User } from "../state/user.model";
import { NzNotificationService } from "ng-zorro-antd/notification";

@Component({
  template: `
  <form nz-form [formGroup]="form" class="space-y-6">
      <div>
        <nz-form-item>
          <nz-form-label [nzSpan]="6">Username</nz-form-label>
          <nz-form-control [nzSpan]="14" nzErrorTip="Please input username!">
            <input nz-input formControlName="username" placeholder="Enter username" />
          </nz-form-control>
        </nz-form-item>
      </div>

      <div>
        <nz-form-item>
          <nz-form-label [nzSpan]="6">Email</nz-form-label>
          <nz-form-control [nzSpan]="14" nzErrorTip="Please input email!">
            <input nz-input formControlName="email" placeholder="Enter email" />
          </nz-form-control>
        </nz-form-item>
      </div>

      <div>
        <nz-form-item>
          <nz-form-label [nzSpan]="6">Password</nz-form-label>
          <nz-form-control [nzSpan]="14" nzErrorTip="Please input password!">
            <nz-input-group [nzPrefix]="prefixIconUser">
              <input nz-input formControlName="password" [type]="passwordVisible ? 'text' : 'password'" placeholder="Enter password" />
              <span nz-input-group-suffix>
                <span nz-icon [nzType]="passwordVisible ? 'eye' : 'eye-invisible'" (click)="passwordVisible = !passwordVisible"></span>
              </span>
            </nz-input-group>
            <ng-template #prefixIconUser>
              <span nz-icon nzType="lock"></span>
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      </div>

      <!-- Role Field -->
      <div>
        <nz-form-item>
          <nz-form-label [nzSpan]="6">Role</nz-form-label>
          <nz-form-control [nzSpan]="14" nzErrorTip="Please select role!">
            <nz-select formControlName="role" nzPlaceHolder="Select a role">
              <nz-option nzValue="Admin" nzLabel="Admin"></nz-option>
              <nz-option nzValue="User" nzLabel="User"></nz-option>
              <nz-option nzValue="Management" nzLabel="Manager"></nz-option>
            </nz-select>
          </nz-form-control>
        </nz-form-item>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end space-x-4 gap-2">
        <button nz-button class="border-gray" nzType="default" (click)="onCancel()">Cancel</button>
        <button nz-button nzType="primary" [disabled]="!form.valid">
          {{id ? 'Update' : 'Create'}} User
        </button>
      </div>
    </form>
    `,
  styles: [],
  selector: 'form-user',
  standalone: false
})
export class FormUserComponent {
@Input() id?: string;
@Output() onCancelEvent = new EventEmitter<any>();
isLoading = false;
form!: FormGroup
passwordVisible = false;
selectedUser$: Observable<User> | null | undefined;

constructor(
  private router: Router,
  private store: Store,
  private fb: FormBuilder,
  private notification: NzNotificationService
){}

ngOnInit() {
  // select lấy get user by id thành công
  this.store.select(selectSelectedUser).subscribe((res: any) => {
    console.log('res1', res)
    if (res.status == true && res.code == 200) {
      this.form.patchValue(res.data)
    } else {
      this.notification.error(
        'Thông báo',
        'Lỗi hệ thống, vui lòng thực hiện lại sau'
      )
    }
  });
  // select thêm user thành công
  this.store.select(selectAddUserSuccess).subscribe((res: any) => {
    console.log('res2', res)
    if (res.status == true && res.code == 200) {
      this.notification.create(
        'success',
        'Thông báo',
        res.message
      );
      this.router.navigate(['/user']);
    } else {

    }
  })
  this.isLoading = false;
  this.form = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    role: [null, Validators.required],
  })
  if (this.id) {
    this.store.dispatch(getUserById({ id: this.id }));
  }
}

onSubmit() {
  if (this.form.valid) {
    this.isLoading = true;
    console.log('Form submitted:', this.form.value);
    this.store.dispatch(addUser({ payload: this.form.value }));
    this.isLoading = false;
  }
}

onCancel() {
  this.onCancelEvent.emit({});
}
}
