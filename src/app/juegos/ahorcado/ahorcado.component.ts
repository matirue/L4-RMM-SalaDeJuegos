import { Component, OnInit } from '@angular/core';
import { GameScoresService } from '../../servicios/game-scores.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from '../../component/chat/chat.component';
import { JuegosModule } from '../juegos.module';

@Component({
  selector: 'app-ahorcado',
  standalone: false, 
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements OnInit {

  title = 'Ahorcado';
  puntos: number = 0;
  diccPosition: number = 0;

  //palabras en juego
  palClave = ['PROGRAMACION','ANGULAR','MAPAS','INDEPENDIENTE','NARANJA','PERRO','XIFOIDEO','PERSONA',
                'LIBERTAD','PALABRA','OBJETO','PERDISTE','GANASTE','ELECTROCARDIOGRAMA','CALEIDOSCOPIO'];

  palabra:string = '';
  palabraOculta:string = '';
  
  intentos:number = 8;
  intntoes_usuarios:number = 0;
  win:boolean = false;
  lose:boolean = false;
  message:string = '';

  letters = ['A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','Ñ','O','P','Q','R','S',
            'T','U','V','W','X','Y','Z'];
  lettersHabilitadas: boolean[] = Array.from({ length: 27 }, () => true);

  constructor(public res: GameScoresService){
    this.selectWord();
  }

  ngOnInit(): void {
  }

  setAttempts(intnetos:number){
    this.intentos = intnetos;
  }

  getAttempts():number{
    return this.intentos;
  }


  checkLetter(letter:string):void{
    if(!this.palabra.includes(letter)){
      this.intntoes_usuarios += 1;
    }

    const index = this.letters.indexOf(letter);
    if (index !== -1) {
      this.lettersHabilitadas[index] = false;
    }

    this.replaceWord(letter);
  }

  selectWord(){
    this.diccPosition = Math.floor(Math.random() * 15);
    this.palabra = this.palClave[this.diccPosition];
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  winVerification(){
    const WordArray = this.palabraOculta.split(' ');
    const WordString = WordArray.join('');
    if(WordString == this.palabra){

      this.res.agregarResultado('Win', 'Ahorcado');

      this.message = 'GANASTE!!!';
      this.puntos =+ 1;
      this.win = true;
      this.hideInterface();
    }

    if(this.intntoes_usuarios >= this.intentos){

      this.res.agregarResultado('Lose', 'Ahorcado');

      this.intntoes_usuarios = 8;
      this.message = 'PERDISTE!!!';
      this.lose = true;
      this.hideInterface();
    }
  }

  hideInterface(){
    if((this.win || this.lose) == true){
      const lettersBox = document.querySelector('.letters__container');
      if(lettersBox != null){lettersBox.classList.add('hide');}
    }
  }
  
  replaceWord(letter:string){
    const ArrayWord = this.palabraOculta.split(' ');

    for(let i = 0; i < this.palabra.length; i++){
      if(this.palabra[i] === letter){
        ArrayWord[i] = letter;
      }
    }

    this.palabraOculta = ArrayWord.join(' ');
    this.winVerification();
  }

  restartGame(){
    this.win = false;
    this.lose = false;
    this.intntoes_usuarios = 0;
    document.querySelector('.letters__container')?.classList.remove('hide');
    // Vuelve a habilitar todas las letras
    this.lettersHabilitadas = Array.from({ length: 27 }, () => true);
    this.selectWord();
  }

}
