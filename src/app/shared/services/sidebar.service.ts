import { Injectable } from '@angular/core';
import { MenuSection } from '../interfaces/sidebar-menu.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public sidebarMenu: MenuSection[] = [
    {
      sectionTitle: 'Trillada de grano',
      menus: [
        {
          title: 'Lotes',
          icon: 'mdi mdi-gauge',
          subMenus: [
            { title: 'Entrada', url: './input' },
            { title: 'Proceso', url: './process' },
            { title: 'Salida', url: './output' },
          ],
        },
        // {
        //   title: 'Apps',
        //   icon: 'mdi mdi-bullseye',
        //   subMenus: [
        //     { title: 'Calendar', url: '' },
        //     { title: 'Chat app', url: '' },
        //     { title: 'Support Ticket', url: '' },
        //   ],
        // },
      ],
    },
    {
      sectionTitle: 'Administración',
      menus: [
        {
          title: 'Mantenimientos',
          icon: 'mdi mdi-account-multiple',
          subMenus: [
            { title: 'Productos', url: './products' },
            { title: 'Proveedores', url: './suppliers' },
            { title: 'Clientes', url: './clients' },
            { title: 'Empleados', url: './employees' },
            { title: 'Usuarios', url: './users' },
          ],
        },
        // {
        //   title: 'Basic Tables',
        //   icon: 'mdi mdi-table',
        //   subMenus: [
        //     { title: 'Basic Tables', url: '' },
        //     { title: 'Table Layouts', url: '' },
        //     { title: 'Data Tables', url: '' },
        //   ],
        // },
      ],
    },
  ];

  constructor() { }

}
