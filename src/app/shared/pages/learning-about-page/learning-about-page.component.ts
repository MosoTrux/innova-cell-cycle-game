import { Component, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'pages-learning-about-page',
  templateUrl: './learning-about-page.component.html',
  styleUrl: './learning-about-page.component.css'
})
export class LearningAboutPageComponent implements OnInit {

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  
  get title() : string {
    return "APRENDIENDO SOBRE MITOSIS";
  }

}
