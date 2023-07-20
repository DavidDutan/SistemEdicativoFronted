import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './pages/Autentificacion/inicio-sesion/inicio-sesion.component';
import { PantallaPrincipalComponent } from './pages/Autentificacion/pantalla-principal/pantalla-principal.component';

const routes: Routes = [
  {path: "login", component: InicioSesionComponent},
  {path: "inicio", component: PantallaPrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
