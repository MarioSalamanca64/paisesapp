import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contry } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  // url completa https://restcountries.eu/rest/v2/name/espa

  private apiUrl:string = 'https://restcountries.eu/rest/v2';
  //para resumir lo datos que nos llegan de la api
  // solo llamas ala propiedad de la classe httpParams
  get httpParams(){
    // codigo original ?fields=name;capital;alpha2code;flag;population
    // httpparams es para configurar la url con en posmain
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population');

  }


  constructor(private http: HttpClient ) {}
  // alado de contry es para que regrese un areglo como lo manda el back
  buscarPais(termino:string):Observable<Contry[]>{
    // crear la url de la peticion
    const url = `${ this.apiUrl }/name/${ termino }`;

    // para que se llame tenemos que poner el Subscriber()
    // el return para mandar la informacion y lo lean en otro lado pero tiene que tener el Observable
    return this.http.get<Contry[]>( url, {params: this.httpParams} );

    //logica del subcribe pero a qui para que desde a qui mande el error 
    //tienes que importar catchError form 'rxjs/operators'
    //of es un generador de observale en capsula el error a qui
    /*(url)
    .pipe(
      catchError(err => of(['hola mundo']))
    );*/ 
  }
  buscarcapital(termino:string):Observable<Contry[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Contry[]>(url, {params: this.httpParams});
  }
  // para ver-pais
  getPaisPorAlpha(id:string):Observable<Contry>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Contry>(url);
  }

  buscarRegion(region:string):Observable<Contry[]>{
    const url = `${this.apiUrl}/region/${region}`;
    // parapoder utilizar los params en la url , {}
    return this.http.get<Contry[]>( url , {params: this.httpParams}  )
      .pipe(
        tap(console.log)
      )
  } 


}
