import { Component } from '@angular/core';

@Component({
  selector: 'pages-puzzle-challenge-page',
  templateUrl: './puzzle-challenge-page.component.html',
  styleUrl: './puzzle-challenge-page.component.css'
})
export class PuzzleChallengePageComponent {
  
  get title() : string {
    return "PUZZLE-CHALLENGE";
  }

}
