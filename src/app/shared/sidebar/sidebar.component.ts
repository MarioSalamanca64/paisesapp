import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles:[
    `
    /* cursor pinter es solo para lo que esta en el sidebar y en las etiquetas li */
    li{
      cursor:pointer;
    }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
