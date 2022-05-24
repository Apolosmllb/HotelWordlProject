import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterclientsComponent } from './registerclients.component';

describe('RegisterclientsComponent', () => {
  let component: RegisterclientsComponent;
  let fixture: ComponentFixture<RegisterclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterclientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
