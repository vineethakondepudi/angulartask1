import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdeactiveComponent } from './formdeactive.component';

describe('FormdeactiveComponent', () => {
  let component: FormdeactiveComponent;
  let fixture: ComponentFixture<FormdeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdeactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
