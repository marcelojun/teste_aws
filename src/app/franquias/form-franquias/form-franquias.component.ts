import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-form-franquias',
  templateUrl: './form-franquias.component.html',
  styleUrls: ['./form-franquias.component.css'],
})
export class FormFranquiasComponent implements OnInit {
  formulario!: FormGroup;

  celMask = {
    mask: '(00)00000-0000',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      whatsapp: new FormControl(null, [
        Validators.required,
        Validators.minLength(14),
      ]),
    });
  }

  baixarApresentacao() {}
}
