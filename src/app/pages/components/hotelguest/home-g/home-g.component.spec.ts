import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGComponent} from "./home-g.component";

describe('HomeGComponent', () => {
  let component: HomeGComponent;
  let fixture: ComponentFixture<HomeGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

