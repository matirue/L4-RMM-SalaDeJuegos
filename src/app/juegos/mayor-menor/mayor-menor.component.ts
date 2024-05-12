import { Component, OnInit } from '@angular/core';
import { GameScoresService } from '../../servicios/game-scores.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ChatComponent } from '../../component/chat/chat.component';
import { JuegosModule } from '../juegos.module';

@Component({
  selector: 'app-mayor-menor',
  standalone: false, 
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MayorMenorComponent implements OnInit {

  puntos: number = 0;

  vidas: number = 3;
  vidasTotal: number = 3;
  win: boolean = false;
  lose: boolean = false;

  arrayNumeros: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  numero: number = 0;
  siguienteNumero: number = 0;


  mensajePuntosWin: string = '';
  mensajePuntosLose: string = '';
  mensajeFinal: string = '';
  smsFinal: boolean = false;

  constructor(public res: GameScoresService) { 
    this.numero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];
  }

  ngOnInit(): void {
  }

   Jugar(botonElegido: any){
    this.SiguienteRonda(this.numero, botonElegido);
  } 

  SiguienteRonda(numero:any, botonElegido:any){

    this.siguienteNumero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];

    if( (botonElegido == 'menor') && (this.siguienteNumero < numero) ){
      this.puntos++;
      this.mensajePuntosWin = 'BIEN, Sigamos...';
      this.win = true;
      this.lose = false;
    }

    if( (botonElegido == 'menor') && (this.siguienteNumero > numero) ){
      //this.puntos++;
      this.mensajePuntosLose = 'Incorrecto, Sigamos...';
      this.vidas = this.vidas - 1;
      this.lose = true;
      this.win = false;
    }

    if( (botonElegido == 'mayor') && (this.siguienteNumero > numero) ){
      this.puntos++;
      this.mensajePuntosWin = 'BIEN, Sigamos...';
      this.win = true;
      this.lose = false;
    }

    if( (botonElegido == 'mayor') && (this.siguienteNumero < numero) ){
      //this.puntos++;
      this.mensajePuntosLose = 'Incorrecto, Sigamos...';
      this.vidas = this.vidas - 1;
      this.lose = true;
      this.win = false;
    }
    this.numero = this.siguienteNumero;

    if(this.puntos === 5){
      
      this.res.agregarResultado('Win', 'Mayor o Menor');

      this.mensajeFinal = 'GANASTE!!!';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }


    if(this.vidas === 0){

      this.res.agregarResultado('Lose', 'Mayor o Menor');

      this.mensajeFinal = 'Fin del juego!!!';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }
  }

  Repetir(){
    this.vidas = 3;
    this.puntos = 0;
    this.mensajePuntosLose = '';
    this.mensajePuntosWin = '';
    this.win = false;
    this.lose = false;
    this.smsFinal = false;
  }

}