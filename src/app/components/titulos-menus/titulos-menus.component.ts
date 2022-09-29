import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos-menus',
  templateUrl: './titulos-menus.component.html',
  styleUrls: ['./titulos-menus.component.css'],
})
export class TitulosMenusComponent implements OnInit {
  @Input() titulo: string = '';

  constructor() {}

  ngOnInit(): void {}
}
