import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionProductoComponent } from './valoracion-producto.component';

describe('ValoracionProductoComponent', () => {
  let component: ValoracionProductoComponent;
  let fixture: ComponentFixture<ValoracionProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValoracionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
