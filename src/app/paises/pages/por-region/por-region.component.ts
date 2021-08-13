import { Component } from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  // aplicar estilos solo a este componente
  styles: [`
    button{
      margin-right: 10px;
    }
  `
  ]
})
export class PorRegionComponent{

  regiones:string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';
  paises: Contry [] = [];

  constructor(private paisservice:PaisService) { }
  getClaseCSS( region:string):string{
    return (region === this.regionActiva)
    ?'btn btn-primary'
    : 'btn btn-outline-primary';
  }
  // hacer el llmado para que muestra que pais estas haciendo click
  activarRegion( region: string){
    // directiva para cuando haces doble click en el mismo pais no se carge otra vez
    // si el argumento es igual ala funcion no regrese nada 
    if(region === this.regionActiva) { return; }


    this.regionActiva = region;
    // purgar el elemento para q carge mas rapido
    this.paises = [];
    // pides region ya q es el evento que le estas dado click
    this.paisservice.buscarRegion( region )
    .subscribe(paises => this.paises = paises);
  }
  

}
