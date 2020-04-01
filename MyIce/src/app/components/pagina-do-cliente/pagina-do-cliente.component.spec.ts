import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDoClienteComponent } from './pagina-do-cliente.component';

describe('PaginaDoClienteComponent', () => {
  let component: PaginaDoClienteComponent;
  let fixture: ComponentFixture<PaginaDoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
