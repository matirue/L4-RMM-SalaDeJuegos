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
  chat: any; // Or const chat: any


  fechaFormateada: string | undefined;
  
  constructor(public chatSrv: ChatService) { 
    // this.chatSrv.CargarMensaje().subscribe( () => { 
    //                                         this.elemento.scrollTop = this.elemento.scrollHeight; } );

    this.chatSrv.CargarMensaje().subscribe(() => {
      let chat: any; // Or const chat: any;

                                              const timestamp = chat.fecha; 
                                              const fecha = new Date(timestamp * 1000); 
                                              this.fechaFormateada = this.formatoFecha(fecha);
                                              this.elemento.scrollTop = this.elemento.scrollHeight;
                                            });
  }

  //formatea la fecha dd/mm/aaaa
  private formatoFecha(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear().toString();
    return `${dia}/${mes}/${anio}`;
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