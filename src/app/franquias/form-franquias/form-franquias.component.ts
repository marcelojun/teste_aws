import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-franquias',
  templateUrl: './form-franquias.component.html',
  styleUrls: ['./form-franquias.component.css'],
})
export class FormFranquiasComponent implements OnInit {
  formulario!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      whatsapp: new FormControl(null, [
        Validators.required,
        Validators.pattern('[- +()0-9]+)]'),
      ]),
    });
  }

  baixarApresentacao() {}
}
