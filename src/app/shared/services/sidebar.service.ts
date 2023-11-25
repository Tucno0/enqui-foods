import { Injectable } from '@angular/core';
import { MenuSection } from '../interfaces/sidebar-menu.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public sidebarMenu: MenuSection[] = [
    {
      sectionTitle: 'personal',
      menus: [
        {
          title: 'Dashboard',
          icon: 'mdi mdi-gauge',
          subMenus: [
            { title: 'Minimal', url: '' },
            { title: 'Analytical', url: '' },
            { title: 'Demographical', url: '' },
            { title: 'Modern', url: '' },
          ],
        },
        {
          title: 'Apps',
          icon: 'mdi mdi-bullseye',
          subMenus: [
            { title: 'Calendar', url: '' },
            { title: 'Chat app', url: '' },
            { title: 'Support Ticket', url: '' },
          ],
        },
      ],
    },
    {
      sectionTitle: 'forms, tables & widgets',
      menus: [
        {
          title: 'Forms',
          icon: 'mdi mdi-file',
          subMenus: [
            { title: 'Basic Forms', url: '' },
            { title: 'Form Layouts', url: '' },
            { title: 'Form Addons', url: '' },
          ],
        },
        {
          title: 'Basic Tables',
          icon: 'mdi mdi-table',
          subMenus: [
            { title: 'Basic Tables', url: '' },
            { title: 'Table Layouts', url: '' },
            { title: 'Data Tables', url: '' },
          ],
        },
      ],
    },
    {
      sectionTitle: 'extra components',
      menus: [
        {
          title: 'Page Layout',
          icon: 'mdi mdi-book-multiple',
          subMenus: [
            { title: '1 Column', url: '' },
            { title: 'Fix header', url: '' },
            { title: 'Fix sidebar', url: '' },
          ],
        },
        {
          title: 'Sample Pages',
          icon: 'mdi mdi-book-open-variant',
          subMenus: [
            { title: 'Starter Kit', url: '' },
            { title: 'Blank page', url: '' },
            { title: 'Profile page', url: '' },
          ],
        },
      ],
    },
  ];

  constructor() { }

}
