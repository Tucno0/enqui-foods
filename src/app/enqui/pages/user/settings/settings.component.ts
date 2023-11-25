import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private settingsService = inject(SettingsService);

  constructor() { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  public changeTheme(theme: string): void {
    this.settingsService.changeTheme(theme);
  }
}
