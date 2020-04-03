import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formas-de-envio',
  templateUrl: './formas-de-envio.component.html',
  styleUrls: ['./formas-de-envio.component.css']
})
export class FormasDeEnvioComponent implements OnInit {

  formaDeEnvio: number = 0;
  @Output() enviarFormaDeEnvio = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
