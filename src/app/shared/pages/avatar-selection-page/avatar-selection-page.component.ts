import { Component } from '@angular/core';

@Component({
  selector: 'pages-avatar-selection-page',
  templateUrl: './avatar-selection-page.component.html',
  styleUrl: './avatar-selection-page.component.css'
})
export class AvatarSelectionPageComponent {
  get title() : string {
    return "SELECCIONAR AVATAR";
  }

}
