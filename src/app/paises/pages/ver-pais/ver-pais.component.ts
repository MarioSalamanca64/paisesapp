import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//tepermite resibir un obserbable y regresa un obserbable
//tap lanza un efecto secunadario
import { switchMap, tap } from 'rxjs/operators'; 

import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Contry;

  // antes de que la pagina inicie 
  //es importante que sea ActivateRoute
  constructor( 
    private activateRoute:ActivatedRoute,
    private PaisService:PaisService
    ) { }
  // ya esta iniciado 
  ngOnInit(): void {

    //params es paramaetros del objeto de la base de datos los cuales puedes ver para porderlos llamar
    // aqui se tendria llamar a un obserbable para llamar el id
    this.activateRoute.params
      // pipe es un tuberia que pides que haga cosas antes de llegar ala respuesta
      .pipe(
        // tiene que retornar un obserbable
        //deber que retorne params retornara param.id
        // destruturacion de params por eso solo queda id
      switchMap( ({ id }) => this.PaisService.getPaisPorAlpha( id )),
      // imprime la llamada de ariba eso sebe en el console.log
      tap( console.log )  
      )
      .subscribe( pais => this.pais = pais);



    /*
    this.activateRoute.params
    .subscribe( params => {
      console.log(params.id);
      
      this.PaisService.getPaisPorAlpha( params.id)
      .subscribe( pais => {
        console.log(pais);
      })*/


      /*en caso de destructurar
        this.activateRoute.params
    .subscribe( ({ id }) => {
      console.log(id);

      this.paisservice.getpaisporalpha(id)
      .subcribe(pais => {
        console.log(pais);
      });
    }
      */ 
    

  }

}
