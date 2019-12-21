import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAuthenticationComponent } from './ng-authentication.component';

describe('NgAuthenticationComponent', () => {
  let component: NgAuthenticationComponent;
  let fixture: ComponentFixture<NgAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
