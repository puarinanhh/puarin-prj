import { Component, DestroyRef, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UserService } from './services/user.service';
import { SharedModule } from '../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  standalone: false,
})
export class UserManagementComponent implements OnInit {
  data: any[] = [];
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  constructor(
    private userService: UserService,
    private notification: NzNotificationService,
  ) { }


  ngOnInit() {
    this.getUsersLst();
  }

  getUsersLst() {
    this.userService.getAll().subscribe({
      next: (data: any) => {
        this.data = data?.data;
      },
      error: (err) => { console.error('Lỗi getAll:', err); }
    })
  }

  deleteUser(user: any) {
    console.log('user:', user);
    this.userService.delete(user.id).subscribe({
      next: () => {
        this.notification.create(
          'success',
          'Thông báo',
          'Xóa user thành công!!'
        );
        this.getUsersLst();
      },
      error: (err) => {
        this.notification.create(
          'error',
          'Thông báo',
          'Xóa user thất bại!'
        );
      }
    })
  }

}


