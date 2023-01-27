import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpformComponent } from './httpform.component';

describe('HttpformComponent', () => {
  let component: HttpformComponent;
  let fixture: ComponentFixture<HttpformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
