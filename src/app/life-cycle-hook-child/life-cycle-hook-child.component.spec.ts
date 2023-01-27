import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHookChildComponent } from './life-cycle-hook-child.component';

describe('LifeCycleHookChildComponent', () => {
  let component: LifeCycleHookChildComponent;
  let fixture: ComponentFixture<LifeCycleHookChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHookChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleHookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
