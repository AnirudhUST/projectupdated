import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulehomepageComponent } from './schedulehomepage.component';

describe('SchedulehomepageComponent', () => {
  let component: SchedulehomepageComponent;
  let fixture: ComponentFixture<SchedulehomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulehomepageComponent]
    });
    fixture = TestBed.createComponent(SchedulehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
