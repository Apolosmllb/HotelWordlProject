import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGComponent } from './chat-g.component';

describe('ChatGComponent', () => {
  let component: ChatGComponent;
  let fixture: ComponentFixture<ChatGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

