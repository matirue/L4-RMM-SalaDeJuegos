import { Component, OnInit } from '@angular/core';
import { GameScoresService } from '../../servicios/game-scores.service';

@Component({
  selector: 'app-adivinar-color', 
  templateUrl: './adivinar-color.component.html',
  styleUrl: './adivinar-color.component.css'
})
export class AdivinarColorComponent implements OnInit {

  oportunidades=3;
  isJugando=true;

  colores: string[] = [];
  ganador:string = '';
  intentos:number = 0;
  unColor = []

  mensajeFinal:string = "";
  smsFinal: boolean = false;
  smsNext: boolean = false;

  puntos: number = 0;


  constructor(public res: GameScoresService) { }

  ngOnInit(): void {
    this.empezarJuego();
  }

  public generarColoresRandom(){
    let long=4;
    const caracteres = "0123456789ABCDEF";
    var color = "";
   
    for (let i=0; i<long; i++) color += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    color="#"+color;

    return color;
  }


  empezarJuego(){
    this.smsFinal = false;
    this.smsNext = false;

    this.colores=[];
    this.ganador="";
    this.intentos=0;
    this.isJugando=true;
    this.mensajeFinal ="";

    // genero 4 colores
    for(let i=1 ;  i<=4 ; i++) {
      this.colores.push(this.generarColoresRandom());
    }

    // color ganador
    var myNumeroAleatorio = Math.floor(Math.random()*(4-1))+1;
    this.ganador=this.colores[myNumeroAleatorio];
  }


  // leo el color clickeado
  colorClick(colorClickeado: string){
 
    this.intentos++;

    if(this.oportunidades!=this.intentos && colorClickeado!=this.ganador){ 
      this.smsNext = true;
      this.mensajeFinal="Ups! intenta con otro color!";
      return;
    }

    if(this.oportunidades==this.intentos){ //lose
      this.perdiste();
      this.isJugando=false;
      return;
    }

    if(colorClickeado==this.ganador){ //win
      this.ganaste();
      this.isJugando=false;
      return;
    }
  }

  ganaste(){
    this.smsFinal = true;
    this.smsNext = false;
    this.mensajeFinal="GANASTE!!!";
    this.puntos++;

    this.res.agregarResultado('Win', 'Colores');
  }

  perdiste(){
    this.smsFinal = true;
    this.smsNext = false;
    this.mensajeFinal="PERDISTE!!! ";

    this.res.agregarResultado('Lose', 'Colores');
  }
}