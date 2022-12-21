import { ComponentFixture, TestBed } from '@angular/core/testing';

import { resumenComponent } from './resumen.component';

describe('resumenComponent', () => {
  let component: resumenComponent;
  let fixture: ComponentFixture<resumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ resumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(resumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
