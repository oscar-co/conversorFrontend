import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

/**
 * En esta constante creo parametros de envio en la llamada http que haré mas adelante
 */
const httpOptions = {
  
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    "_token": "{{ csrf_token() }}"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor( private http: HttpClient) { }

  /**
   * Aqui tengo las urls que comento dependiendo de si quiero entorno de prueba o de produccion
   */
  //private url = 'http://api.ocodev.com/api';
  private url = 'http://conversor.com/api';

  /**
   * Funcion que devuelve las unidades en función de la magnitud introducida.
   */
  getUnidadesPorMagnitud(magnitud){

    return this.http.get(`${ this.url }/unidades/${ magnitud }`)
    .pipe( map( resp => {

      const unidades = [];

      Object.keys(resp['unidades']).forEach( key => {

        const unidad = resp['unidades'][key].unidad;
        unidades.push(unidad);
        }); 
      return unidades;
      }
    ))
  }

  getPatronesPorMagnitudYUnidad(formaPat){

    let json = JSON.stringify(formaPat.value);
    let params = 'json=' +json;
    return this.http.post(`${ this.url }/calculo`, params, httpOptions)
    .pipe( map( resp => resp //console.log(resp)
      ));
  }

  /**
   * Función que devuelve el resultado de conversión en funcion de las unidades y el valor de entrada.
   */
  getCambio(forma){
    //console.log(forma.value);

    let json = JSON.stringify(forma.value);
    let params = 'json=' +json;
    return this.http.post(`${ this.url }/cambio`, params, httpOptions)
    .pipe( map( resp => resp ));
      //.pipe( map( resp => resp['resultado']));
  }

  getIncertidumbrePorPatronYValor(formaPat){

    let json = JSON.stringify(formaPat.value);
    let params = 'json=' +json;
    return this.http.post(`${ this.url }/calculoIncertidumbre`, params, httpOptions)
    .pipe( map( resp => resp//console.log(resp)
      ));
      
  }
}
