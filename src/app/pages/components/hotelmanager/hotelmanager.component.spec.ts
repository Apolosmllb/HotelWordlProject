import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelmanagerComponent } from './hotelmanager.component';

describe('HotelmanagerComponent', () => {
  let component: HotelmanagerComponent;
  let fixture: ComponentFixture<HotelmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
