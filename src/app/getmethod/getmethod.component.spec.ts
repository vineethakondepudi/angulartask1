import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmethodComponent } from './getmethod.component';

describe('GetmethodComponent', () => {
  let component: GetmethodComponent;
  let fixture: ComponentFixture<GetmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
