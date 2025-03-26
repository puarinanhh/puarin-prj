import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { UserService } from '../../services/user.service';
import { addUser } from '../../state/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  standalone: false,
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  passwordVisible = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {
    this.createUserForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      role: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.createUserForm.valid) {
      this.isLoading = true;
      // TODO: Implement user creation logic here
      console.log('Form submitted:', this.createUserForm.value);
      this.store.dispatch(addUser({ payload: this.createUserForm.value }));
      this.isLoading = false;
    }
  }

  onCancel(): void {
    this.router.navigate(['/user-management']);
  }
}
