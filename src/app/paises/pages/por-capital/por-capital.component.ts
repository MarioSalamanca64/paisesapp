import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino:string = '';
  hayError: boolean = false;
  paises :Contry [] = [];

  constructor( private paisService: PaisService ) { }
  // este termino es el que biene del input
  buscar(termino:string){
    // iria debajo del resp pero sepone a qui para cuando la persona da enter
    this.hayError = false;
    //resibe el termino del input
    this.termino = termino;
    
    // para que lo muestre nesesuta al subcribe y aqui se pondria ya que aqui quieres que muestra la info
    //termino que resivo del argumento
    this.paisService.buscarcapital( termino)
    /*en subcribe hay tres valores los tres son opcionales 
    next que es cuando se resibe un valor
    error 
    complete que es cuando se termina y no resibiremos nada mas
    primero es el next segundo el error
    subscribe es el que manda los datos en *ngfor se pondria paises que es el q resibe 
    */
    .subscribe( (paises) => {
      //console.log(paises);
      this.paises = paises;
    }, (err) =>{
      this.hayError = true;
      // limpia el buscador para que .leng>0 funcione bien 
      this.paises = [];
    });
  }
  // aqui ya se establese para cuando escribas 300 ms se quiete el error 
  sugerencias(termino:string){
    this.hayError = false;
    
  }


}
