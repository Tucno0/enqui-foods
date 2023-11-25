export interface MenuSection {
  sectionTitle: string;
  menus:        Menu[];
}

interface Menu {
  title:   string;
  icon:    string;
  subMenus: SubMenu[];
}

interface SubMenu {
  title: string;
  url:   string;
}
