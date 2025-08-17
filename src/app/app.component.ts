import {Component, OnInit} from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {MenuItem, MenuService} from './core/services/menu.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NzLayoutModule,  RouterModule, NzIconModule, NzMenuModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  menuLst: MenuItem[] = [];
  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
  }
  ngOnInit() {

  }
}
