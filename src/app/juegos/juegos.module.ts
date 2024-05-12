import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { JuegosRoutingModule } from './juegos-routing.module'; 
import { ChatModule } from '../component/chat/chat.module';
import { RouterLink } from '@angular/router';




@NgModule({
  declarations: [
    MayorMenorComponent,
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    JuegosRoutingModule, 
    FormsModule,
    ChatModule
  ],
  exports: [JuegosRoutingModule]
})
export class JuegosModule { }
