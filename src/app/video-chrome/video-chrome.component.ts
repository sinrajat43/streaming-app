import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-chrome',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './video-chrome.component.html',
  styleUrl: './video-chrome.component.scss'
})
export class VideoChromeComponent implements OnInit, OnDestroy {
  player: videojs.Player | undefined;

  ngOnInit(): void {
    this.player = videojs('hls-video', {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [{
        src: 'http://localhost:8000/stream.m3u8',
        type: 'application/x-mpegURL'
      }]
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
