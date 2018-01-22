import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelioComponent } from './helio.component';

describe('HelioComponent', () => {
  let component: HelioComponent;
  let fixture: ComponentFixture<HelioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
