import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-formulario-patron',
  templateUrl: './formulario-patron.component.html',
  styleUrls: ['./formulario-patron.component.css']
})
export class FormularioPatronComponent implements OnInit {

  //Crear formulario
  formaPat: FormGroup;

  public unidades: Array<any>;
  public result: number;
  public patrones;
  public incertidumbrePatron;
  public uniSalida: string;
  public showResult: boolean = false;
  public errorMessage: string = "";

  constructor( private conversorService: ConversorService,
                private fb: FormBuilder) { 

                  //Llamo a la función de crear el formulario Reactivo
                  this.crearFormulario();
                }

  ngOnInit(): void {

    
  }

  magnitudChange(magnitud){

    this.formaPat.controls['vEntradaPat'].setValue('');
    this.formaPat.controls['patronPat'].setValue('');
    this.showResult = false;
    this.errorMessage = "";
    

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
    if( this.formaPat.valid ){

      console.log("todo OK");
      console.log(this.formaPat.value);
      
      this.conversorService.getPatronesPorMagnitudYUnidad(this.formaPat).subscribe(
        resp => { this.patrones = resp,
                  console.log(this.patrones)

                  if(this.patrones.length == 0){

                    //Si NO hay patrones dejamos de mostrar el resultado y ponemos mensaje de error.
                    console.log("length 0");
                    this.showResult = false;
                    this.errorMessage = "Fuera de rango";
                    this.formaPat.controls['patronPat'].setValue('');
                  }else{
  
                    //Si hay patrones borramos el mensaje de error y calculamos la Incertidumbre.
                    console.log("length > 0");
                    this.errorMessage = "";
                    this.calcularInc();
                    this.uniSalida = this.formaPat.controls['uEntradaPat'].value;
                  }
                }
                
      );
      
      
    }
    else{
      console.log("no OK");
      /*if(this.result != 0)
      this.lmpiarValoresSalida();*/
    }
  }

  resetForm(){
    this.crearFormulario();
    this.showResult = false;
    this.uniSalida = "";
    /*this.lmpiarValoresSalida();
    this.uniSalida = "";*/
  }

  crearFormulario(){
    this.formaPat = this.fb.group({
      sMagnitudPat: ['', Validators.required],
      uEntradaPat: ['', Validators.required],
      vEntradaPat: ['', Validators.required],
      patronPat: ['']
    });
  }  


  calcularInc(){

    if(this.formaPat.controls['patronPat'].value != 0){

      this.conversorService.getIncertidumbrePorPatronYValor(this.formaPat).subscribe(
        resp => this.incertidumbrePatron = resp['valor']  //console.log(resp)
      );
  
      this.showResult = true;
    }
    
  }

}
