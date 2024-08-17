import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoChromeComponent } from './video-chrome.component';

describe('VideoChromeComponent', () => {
  let component: VideoChromeComponent;
  let fixture: ComponentFixture<VideoChromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoChromeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoChromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
