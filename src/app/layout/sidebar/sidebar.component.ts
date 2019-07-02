import { Component, Inject, OnInit } from '@angular/core';
import { sidebarMotion } from '@app/core/animations/sidebar.motion';
import { LayoutService } from '@app/layout/layout.service';
import { MenuItemDirective } from '@app/shared/components/menu/menu-item/menu-item.directive';

@Component({
  selector: 'z-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.styl'],
  animations: sidebarMotion
})
export class SidebarComponent implements OnInit {
  path = '/sign';
  constructor(public layoutSer: LayoutService) {}

  changeMenu(v: MenuItemDirective) {
    console.log(v);
  }

  ngOnInit() {}
}
