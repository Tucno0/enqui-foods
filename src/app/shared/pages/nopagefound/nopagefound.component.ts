import { Component } from '@angular/core';

@Component({
  selector: 'shared-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css'],
})
export class NopagefoundComponent {
  public year: number = new Date().getFullYear();
}
