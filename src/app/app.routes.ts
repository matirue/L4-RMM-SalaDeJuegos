import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { QuienSoyComponent } from './component/quien-soy/quien-soy.component';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorV2Component } from './component/error-v2/error-v2.component';
import { AuthGuardsService } from './guards/auth-guards.service';
import { RegistroComponent } from './component/registro/registro.component'; 

export const routes: Routes = [ 
      { path: '', redirectTo: '/login', pathMatch: "full" },

      //logign and register
      { path:'login', component: LoginComponent },
      { path:'registro', component: RegistroComponent },

      //system
      { path: 'juegos', loadChildren: () => import('./juegos/juegos-routing.module').then(m => m.JuegosRoutingModule), canActivate: [AuthGuardsService] },  // is not standalone
      { path:'home', component: HomeComponent, canActivate: [AuthGuardsService] },
      { path:'quienSoy', component: QuienSoyComponent }, 

      //ERROR o page builder
      { path:'build', component: ErrorV2Component },
      { path:'**', component: ErrorComponent }
];
