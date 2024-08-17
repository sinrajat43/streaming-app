import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hls-streaming-app';
}