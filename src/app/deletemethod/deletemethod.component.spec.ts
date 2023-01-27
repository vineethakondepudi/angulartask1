import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemethodComponent } from './deletemethod.component';

describe('DeletemethodComponent', () => {
  let component: DeletemethodComponent;
  let fixture: ComponentFixture<DeletemethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletemethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
