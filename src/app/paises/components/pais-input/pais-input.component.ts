import { Component, Output , EventEmitter,OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';




@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
// para conectar el buscador a PorPaisComponent tiene que escuchar el evento click
// esto se hace con @output onEnter es el evento que creamos EvenEmiter espara emitir el evento 
//el tipo de evento es un string que seria termino
@Output() onEnter   : EventEmitter<string> = new EventEmitter();
// espara que escuche las teclas oprimidas y reasione 300ms
@Output() onDebounce: EventEmitter<string> = new EventEmitter();
// esta resibiendo el placeholder de los otros componentes 
@Input() placeholder:string = ''; 

// crear un Observable amano se emita cuando dejo de escribir
debouncer: Subject<string> = new Subject();


termino: string = '';

ngOnInit() {
  this.debouncer
  // pipe es como una tuberia que hace que trasformemos la salida de esta peticion
  //cuanto tiepo debe pasar para que mande el sigiente peticion
  .pipe(debounceTime(300))
  .subscribe( valor => {
    //console.log('debouncer:',valor);
    // mandar a emitir 
    this.onDebounce.emit( valor );
  });
} 

buscar(){
  // aqui ya se esta emitiendo 
this.onEnter.emit(this.termino);

}
// La event.targetpropiedad se puede utilizar para implementar la delegación de eventos .
teclaPresionada(){

  this.debouncer.next(this.termino);

}

// en este caso es por si quieres llamar el $event 
// teclaPresionada(event :any){
//   const valor = event.target.value;
//   console.log (valor);

//   console.log(this.termino);
}


