import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupemployerComponent } from './signupemployer.component';

describe('SignupemployerComponent', () => {
  let component: SignupemployerComponent;
  let fixture: ComponentFixture<SignupemployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupemployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
