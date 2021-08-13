import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[`
    li{
      cursor:pointer;
    }
  `]
})
export class PorPaisComponent {
  termino:string = '';
  hayError: boolean = false;
  paises :Contry [] = [];
  paisesSugeridos :Contry [] = [];

  mostrarSugerencias:boolean = false;

  constructor( private paisService: PaisService ) { }
  // este termino es el que biene del input
  buscar(termino:string){
    // cuando haga click muestre lso sugeridos
    this.mostrarSugerencias = false;
    // iria debajo del resp pero sepone a qui para cuando la persona da enter
    this.hayError = false;
    //resibe el termino del input
    this.termino = termino;
    
    // para que lo muestre nesesuta al subcribe y aqui se pondria ya que aqui quieres que muestra la info
    //termino que resivo del argumento
    this.paisService.buscarPais( termino)
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
    // termino debe ser el mismo terminoq ue ponemos en el buscador
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais( termino )
    .subscribe (paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = []
    );

  }

  buscarSugerido(termino:string){
    this.buscar(termino);
   
  }


}
