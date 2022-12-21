import { ComponentFixture, TestBed } from '@angular/core/testing';

import { esrtudianteComponent } from './estudiante.component';

describe('estudiantecomponent', () => {
  let component: esrtudianteComponent;
  let fixture: ComponentFixture<esrtudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ esrtudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(esrtudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
