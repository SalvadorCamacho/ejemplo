import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'superior',
  templateUrl: './barra-navegacion.component.html',
  styles: [
  ]
})
export class BarraNavegacionComponent implements OnInit {

  x = 'Barra de navegación superior';
  constructor() { }

  ngOnInit(): void {
  }

}
