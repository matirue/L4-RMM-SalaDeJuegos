import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { JuegosRoutingModule } from './juegos-routing.module'; 
import { ChatModule } from '../component/chat/chat.module';
import { RouterLink } from '@angular/router';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AdivinarColorComponent } from './adivinar-color/adivinar-color.component';
import { ColoresComponent } from './colores/colores.component';


@NgModule({
  declarations: [
    MayorMenorComponent,
    AhorcadoComponent,
    PreguntadosComponent,
    AdivinarColorComponent,
    ColoresComponent
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
