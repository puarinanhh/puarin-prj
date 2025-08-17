// management-layout.component.ts
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { MenuItem, MenuService } from "../../core/services/menu.service";

@Component({
  selector: 'app-management-layout',
  styleUrl: './management-layout.component.scss',
  template: `
    <nz-layout class="app-layout">
  <nz-sider class="menu-sidebar"
    nzCollapsible
    nzWidth="256px"
    nzBreakpoint="md"
    [(nzCollapsed)]="isCollapsed"
    [nzTrigger]="null"
  >
    <div class="sidebar-logo">
      <a href="" target="_blank">
        <img src="../assets/images/logo.jpg" alt="logo">
      </a>
    </div>
    @if (menuLst && menuLst.length > 0 ) {
    <ul nz-menu nzTheme="dark" nzMode="inline" nzInlineCollapsed [nzInlineCollapsed]="isCollapsed">
      @for (item of menuLst; track item) {
        <li nz-submenu nzOpen [nzTitle]="item.title" [nzIcon]="item.icon ?? ''">
          @if (item.children && item.children.length > 0) {
          <ul>
            @for (itemChild of item.children; track itemChild) {
              <li nz-menu-item [routerLink]="itemChild.route" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
                <a>{{itemChild.title}}</a>
              </li>
            }
          </ul>
          }
        </li>
      }
    </ul>
    }
  </nz-sider>
  <nz-layout>
    <nz-header>
      <div class="app-header">
        <span class="header-trigger" (click)="isCollapsed = !isCollapsed">
          <nz-icon class="trigger" [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'" />
        </span>
      </div>
    </nz-header>
    <nz-content>
      <header></header>
      <div class="inner-content">
        <router-outlet></router-outlet>
      </div>
    </nz-content>
  </nz-layout>
</nz-layout>

  `,
  standalone: true,
  imports: [CommonModule, RouterModule, NzLayoutModule, NzMenuModule, NzIconModule]
})
export class ManagementLayoutComponent implements OnInit {

  isCollapsed = false;
  menuLst: MenuItem[] = [];

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuLst = this.menuService.getMenu();

    // Handle route restoration
    if (window.history.state && window.history.state.navigationId) {
      const currentUrl = window.location.pathname;
      if (currentUrl !== '/') {
        this.router.navigateByUrl(currentUrl, { replaceUrl: true });
      }
    }
  }


}
