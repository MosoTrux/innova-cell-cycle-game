import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'pages-learning-about-page',
  templateUrl: './learning-about-page.component.html',
  styleUrl: './learning-about-page.component.css'
})
export class LearningAboutPageComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild('demoYouTubePlayer') demoYouTubePlayer!: ElementRef<HTMLDivElement>;
      videoWidth: number | undefined;
      videoHeight: number | undefined;


      constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  
  get title() : string {
    return "APRENDIENDO SOBRE MITOSIS";
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 800);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

}
