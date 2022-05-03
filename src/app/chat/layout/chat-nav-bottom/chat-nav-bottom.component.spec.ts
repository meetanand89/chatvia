import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNavBottomComponent } from './chat-nav-bottom.component';

describe('ChatNavBottomComponent', () => {
  let component: ChatNavBottomComponent;
  let fixture: ComponentFixture<ChatNavBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatNavBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNavBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
