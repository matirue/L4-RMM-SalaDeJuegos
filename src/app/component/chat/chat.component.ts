import { Component, NgModule, OnInit } from '@angular/core';
import { ChatService } from '../../servicios/chat.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChatModule } from './chat.module';

@Component({
  selector: 'app-chat',
  standalone: false, 
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnInit {

  mensaje: string = '';
  elemento: any;

  constructor(public chatSrv: ChatService) { 
    this.chatSrv.CargarMensaje().subscribe( () => { 
                                            this.elemento.scrollTop = this.elemento.scrollHeight; } );
  }


  ngOnInit(): void {
    setTimeout(()=>{
      this.elemento = document.getElementById('app-mensajes');
    },20)
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }


  EnviarMensaje(){

    if(this.mensaje.length === 0){
      return;
    }

    this.chatSrv.AgregarMensaje(this.mensaje);

    this.mensaje='';        
  }


  scrollToBottom(): void {
    try {
      this.elemento.scrollTop = this.elemento.scrollHeight;
    } catch (err) { 
    }
  }
}