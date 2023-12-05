import { Component } from '@angular/core';

@Component({
  selector: 'pages-start-page',
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {
  get title() : string {
    return "INNOVA LEARNING";
  }
}
