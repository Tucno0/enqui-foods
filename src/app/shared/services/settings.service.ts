import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    this.loadTheme();
  }

  public changeTheme(theme: string): void {
    if (this.linkTheme) {
      const url = `./assets/css/colors/${theme}.css`;
      this.linkTheme.setAttribute('href', url);
      localStorage.setItem('theme', url);
    }

    this.checkCurrentTheme();
  }

  public loadTheme(): void {
    const urlTheme = localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.linkTheme?.setAttribute('href', urlTheme);
  }

  public checkCurrentTheme(): void {
    const urlThemes: NodeListOf<Element> = document.querySelectorAll('.selector');

    urlThemes.forEach( element => {
      element.classList.remove('working');

      const btnTheme = element.getAttribute('data-theme');
      const btnUrlTheme = `./assets/css/colors/${btnTheme}.css`;

      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnUrlTheme === currentTheme) {
        element.classList.add('working');
      }
    })
  }
}
