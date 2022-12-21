import { ComponentFixture, TestBed } from '@angular/core/testing';

import { empresaComponent } from './empresa.component';

describe('empresaComponent', () => {
  let component: empresaComponent;
  let fixture: ComponentFixture<empresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ empresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(empresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
