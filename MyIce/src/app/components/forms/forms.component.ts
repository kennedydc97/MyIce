import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formularioLogin: FormGroup


  constructor() { }


  ngOnInit() {

    this.formularioLogin = new FormGroup({
      email: new FormControl(null),
      senha: new FormControl(null)
    });
  }

  onSubmit() {

    console.log(this.formularioLogin.value)

  }

}
