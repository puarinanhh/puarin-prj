import { Injectable } from '@angular/core';
import {
      CanActivate,
      ActivatedRouteSnapshot,
      RouterStateSnapshot,
      Router,
      UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


// @Injectable({
//       providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//       constructor(private authService: AuthService, private router: Router) { }

//       canActivate(
//             next: ActivatedRouteSnapshot,
//             state: RouterStateSnapshot
//       ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//             // Lấy roles được cấu hình trong route (VD: data: { roles: ['admin'] })
//             const allowedRoles = next.data['roles'] as Array<string>;

//             // Lấy role thực tế của user (nếu không có cookie => 'guest')
//             const userRole = this.authService.getUserRole(); // 'guest' | 'admin'

//             // Nếu route không khai báo roles, ta coi như không bảo vệ
//             if (!allowedRoles || allowedRoles.length === 0) {
//                   return true;
//             }

//             // Kiểm tra userRole có nằm trong allowedRoles không
//             if (allowedRoles.includes(userRole)) {
//                   return true; // Cho vào
//             } else {
//                   // Không có quyền => chuyển hướng, ví dụ về trang /not-authorized
//                   this.router.navigate(['/not-authorized']);
//                   return false;
//             }
//       }
// }
