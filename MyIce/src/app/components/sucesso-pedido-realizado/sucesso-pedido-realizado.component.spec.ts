import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoPedidoRealizadoComponent } from './sucesso-pedido-realizado.component';

describe('SucessoPedidoRealizadoComponent', () => {
  let component: SucessoPedidoRealizadoComponent;
  let fixture: ComponentFixture<SucessoPedidoRealizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessoPedidoRealizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessoPedidoRealizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
