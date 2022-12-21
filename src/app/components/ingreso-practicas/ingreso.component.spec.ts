import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ingresoComponent } from './ingreso.component';

describe('ingresoComponent', () => {
  let component: ingresoComponent;
  let fixture: ComponentFixture<ingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ingresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
