import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'izquierdo',
  templateUrl: './menu-lateral.component.html',
  styles: [
  ]
})
export class MenuLateralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lista = ['1', '2','3'];
  
  @Input()  size: number | string = 30; //TS --> HTML
  @Output() sizeChange = new EventEmitter<number>(); //HTML -->TS

  title = 'Salvador';


}
