import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSlideRightContentComponent } from './chat-slide-right-content.component';

describe('ChatSlideRightContentComponent', () => {
  let component: ChatSlideRightContentComponent;
  let fixture: ComponentFixture<ChatSlideRightContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSlideRightContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSlideRightContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
