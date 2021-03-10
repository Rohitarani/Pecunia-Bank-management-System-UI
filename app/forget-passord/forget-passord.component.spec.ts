import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassordComponent } from './forget-passord.component';

describe('ForgetPassordComponent', () => {
  let component: ForgetPassordComponent;
  let fixture: ComponentFixture<ForgetPassordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPassordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPassordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
