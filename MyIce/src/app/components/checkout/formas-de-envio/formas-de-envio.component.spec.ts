import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasDeEnvioComponent } from './formas-de-envio.component';

describe('FormasDeEnvioComponent', () => {
  let component: FormasDeEnvioComponent;
  let fixture: ComponentFixture<FormasDeEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormasDeEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormasDeEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
