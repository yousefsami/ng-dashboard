import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerStatesComponent } from './worker-states.component';

describe('WorkerStatesComponent', () => {
  let component: WorkerStatesComponent;
  let fixture: ComponentFixture<WorkerStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerStatesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
