import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarContactoComponent } from './visualizar-contacto.component';

describe('VisualizarContactoComponent', () => {
  let component: VisualizarContactoComponent;
  let fixture: ComponentFixture<VisualizarContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarContactoComponent]
    });
    fixture = TestBed.createComponent(VisualizarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
