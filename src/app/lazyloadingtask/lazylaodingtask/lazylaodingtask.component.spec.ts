import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylaodingtaskComponent } from './lazylaodingtask.component';

describe('LazylaodingtaskComponent', () => {
  let component: LazylaodingtaskComponent;
  let fixture: ComponentFixture<LazylaodingtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazylaodingtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazylaodingtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
