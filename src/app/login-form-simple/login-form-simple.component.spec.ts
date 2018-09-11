import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormSimpleComponent } from './login-form-simple.component';

describe('LoginFormSimpleComponent', () => {
  let component: LoginFormSimpleComponent;
  let fixture: ComponentFixture<LoginFormSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
