import { Component, Input, OnInit } from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input()paises:Contry[] = [];

  constructor() { }
  

  ngOnInit(): void {
  }

}
