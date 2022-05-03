import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContentSlideComponent } from './chat-content-slide.component';

describe('ChatContentSlideComponent', () => {
  let component: ChatContentSlideComponent;
  let fixture: ComponentFixture<ChatContentSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatContentSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatContentSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
