import { Injectable } from '@angular/core';

@Injectable({
      providedIn: 'root',
})
export class AuthService {
      constructor() { }

      setRoleCookie(role: string) {
            document.cookie = `user_role=${role}; path=/;`;
      }

      getRoleFromCookie(): string | null {
            const match = document.cookie.match(new RegExp('(^| )user_role=([^;]+)'));
            return match ? match[2] : null;
      }

      getUserRole(): 'guest' | 'admin' {
            const role = this.getRoleFromCookie();
            return role === 'admin' ? 'admin' : 'guest';
      }


      loginAsAdmin() {
            this.setRoleCookie('admin');
      }


}
