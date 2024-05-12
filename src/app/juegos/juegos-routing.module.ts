import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';

//games
import { AuthGuardsService } from '../guards/auth-guards.service';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

const routes: Routes = [
  { path: 'mayorMenor', component: MayorMenorComponent, canActivate: [AuthGuardsService] },
  { path: 'ahorcado', component: AhorcadoComponent, canActivate: [AuthGuardsService] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class JuegosRoutingModule { }
