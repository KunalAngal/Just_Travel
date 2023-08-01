import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit{
  video: HTMLVideoElement;

  constructor() { }

  ngOnInit(): void {
    this.video = document.querySelector('.video-wrapper video');
  }

  playPauseVideo() {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

}


