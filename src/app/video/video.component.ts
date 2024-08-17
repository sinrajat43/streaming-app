import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './video.component.html',
  // styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
