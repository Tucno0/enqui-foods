import { Component, OnInit, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { MenuSection } from '../../interfaces/sidebar-menu.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  private sidebarService = inject(SidebarService);

  public sidebarMenuItems: MenuSection[] = [];

  constructor() {
    this.sidebarMenuItems = this.sidebarService.sidebarMenu;
  }
}
