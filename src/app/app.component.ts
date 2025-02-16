import {Component, OnInit} from '@angular/core';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {MenuItem, MenuService} from './core/services/menu.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  menuLst: MenuItem[] = [];
  constructor(
    private menuService: MenuService
  ) {
  }

  ngOnInit() {
    this.menuLst = this.menuService.getMenu();
  }

}
