import { Component } from '@angular/core';

@Component({
  selector: 'pages-topic-selection-page',
  templateUrl: './topic-selection-page.component.html',
  styleUrl: './topic-selection-page.component.css'
})
export class TopicSelectionPageComponent {
  
  get title() : string {
    return "SELECCIONAR TEMA";
  }

}
