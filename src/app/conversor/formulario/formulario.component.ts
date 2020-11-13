import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ConversorService } from '../../services/conversor.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //Creacion del formulario
  forma: FormGroup;

  public unidades: Array<any>;
  public result: number;
  public uniSalida: string;
  public showResult: boolean = false;

  //Creo el objeto de tipo ConversorService y de tipo FormBuilder
  constructor( private conversorService: ConversorService,
                private fb: FormBuilder) { 

                  //Llamo a la función de crear el formulario Reactivo
                  this.crearFormulario();
                }

  ngOnInit(): void {
  }

  /**
   * En esta funcion recibo la magnitud insertada y tras limpiar el valor de entrada 
   * y los valores de salida llamo al servicio que busca las unidades correspondientes
   * a dicha magnitud
   */
  magnitudChange(magnitud){

    this.forma.controls['vEntrada'].setValue('');
    this.lmpiarValoresSalida();

    this.conversorService.getUnidadesPorMagnitud(magnitud).subscribe( 
      resp => this.unidades = resp
      ); 
  }

  convertir(){

    //console.log("cambia algo");

    /**
     * Esta función se ejecuta cuando realizo algún cambio en los campos del formulario,
     * y en ella compruebo si el formualario es válido(todos los campos rellenos) o si no lo es. 
     * Si es válido llamo al servicio mediante un observable y espero a que me devuelva resultado.
     * Si no es valido y el resultado es distinto de 0 borro los valores de salida (esto es para cuando
     * borro el valor de entrada que no se quede nada en el resultado de la última conversión).
     */
    if( this.forma.valid ){

      console.log("todo OK");
      this.conversorService.getCambio(this.forma).subscribe(
        resp =>  this.result = resp['resultado'] 
      );

      this.showResult = true;
    }
    else{
      console.log("no OK");
      if(this.result != 0)
      this.lmpiarValoresSalida();
    }
  }

  resetForm(){
    this.crearFormulario();
    this.lmpiarValoresSalida();
    this.uniSalida = "";
  }

  crearFormulario(){
    this.forma = this.fb.group({
      sMagnitud: ['', Validators.required],
      uEntrada: ['', Validators.required],
      uSalida:  ['', Validators.required],
      vEntrada: ['', Validators.required]
    });
  }  

  lmpiarValoresSalida(){

    this.result = 0;
    //this.uniSalida = "";
    this.showResult = false;
  }
}