import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHookParentComponent } from './life-cycle-hook-parent.component';

describe('LifeCycleHookParentComponent', () => {
  let component: LifeCycleHookParentComponent;
  let fixture: ComponentFixture<LifeCycleHookParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHookParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleHookParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
