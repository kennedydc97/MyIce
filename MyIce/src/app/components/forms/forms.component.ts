import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public form = new Usuario(1, 'andrehenrique@gmail.com');
  public userForm: FormGroup;


  constructor() { }


  ngOnInit() {
    this.userForm = new FormGroup({
     'email': new FormControl(this.form.email, [Validators.required, Validators.email])
    });
   }


}
