import {Injectable} from '@angular/core';

export interface MenuItem {
  title: string;
  route?: string;
  icon?: string | undefined | null;
  children?: MenuItem[];
}

@Injectable({ providedIn: 'root' })
export class MenuService {
private readonly menuList: MenuItem[] = [
  {
    title: 'Trang chủ',
    route: '/home',
    icon: 'dashboard',
  },
  {
    title: 'Quản lý người dùng',
    icon: 'user',
    children: [
      {
        title: 'Danh sách',
        route: '/user'
      }
    ]
  }
]

  getMenu(): MenuItem[] {
    return this.menuList;
  }

}
