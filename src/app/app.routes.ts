import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { QuienSoyComponent } from './component/quien-soy/quien-soy.component';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorV2Component } from './component/error-v2/error-v2.component';

export const routes: Routes = [ 
      { path: '', redirectTo: '/login', pathMatch: "full" },
      { path:'login', component: LoginComponent },
      { path:'home', component: HomeComponent },
      { path:'quienSoy', component: QuienSoyComponent }, 
      { path:'build', component: ErrorV2Component },
      { path:'**', component: ErrorComponent }
];
