import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanDetailComponent } from './superman-detail.component';

describe('SupermanDetailComponent', () => {
  let component: SupermanDetailComponent;
  let fixture: ComponentFixture<SupermanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
