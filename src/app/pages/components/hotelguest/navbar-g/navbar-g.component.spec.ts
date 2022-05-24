import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGComponent } from './navbar-g.component';

describe('NavbarGComponent', () => {
  let component: NavbarGComponent;
  let fixture: ComponentFixture<NavbarGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

