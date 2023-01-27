import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchmethodComponent } from './patchmethod.component';

describe('PatchmethodComponent', () => {
  let component: PatchmethodComponent;
  let fixture: ComponentFixture<PatchmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
