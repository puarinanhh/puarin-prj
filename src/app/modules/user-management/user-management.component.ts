import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  standalone: false,
})
export class UserManagementComponent implements OnInit {
  data: any[] = [];
  isModalVisible = false;
  modalTitle = 'Create user'
  selectedUserId?: string;
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
          err
        );
      }
    })
  }

  createUserModal() {
    this.modalTitle = 'Create user',
    this.selectedUserId = undefined;
    this.isModalVisible = true;

  }

  editUser(id: string) {
    this.modalTitle = 'Edit user';
    this.selectedUserId = id;
    this.isModalVisible = true;
  }

  handleCancel() {
    this.isModalVisible = false;
  }
}


