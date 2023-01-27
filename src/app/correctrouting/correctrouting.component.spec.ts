import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectroutingComponent } from './correctrouting.component';

describe('CorrectroutingComponent', () => {
  let component: CorrectroutingComponent;
  let fixture: ComponentFixture<CorrectroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectroutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
