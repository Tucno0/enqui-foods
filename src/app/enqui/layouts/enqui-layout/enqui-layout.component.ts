import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings.service';

declare function customInitFunctions(): any;
// import '../../../../assets/js/custom.js';

@Component({
  selector: 'enqui-layout',
  templateUrl: './enqui-layout.component.html',
  styleUrls: ['./enqui-layout.component.css'],
})
export class EnquiLayoutComponent implements OnInit {
  private settingsService = inject(SettingsService);

  constructor() {}

  ngOnInit() {
    customInitFunctions();
  }
}
