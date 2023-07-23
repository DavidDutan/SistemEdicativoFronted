import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './pages/Autentificacion/inicio-sesion/inicio-sesion.component';
import { PantallaPrincipalComponent } from './pages/Autentificacion/pantalla-principal/pantalla-principal.component';
import { AdministracionUsuariosComponent } from './pages/Usuarios/administracion-usuarios/administracion-usuarios.component';
import { RegistroCalifiacionesComponent } from './pages/Calificaciones/registro-califiaciones/registro-califiaciones.component';
import { GestionDocentesComponent } from './pages/Docentes/gestion-docentes/gestion-docentes.component';
import { GestionEstudiantesComponent } from './pages/Inscripciones/gestion-estudiantes/gestion-estudiantes.component';

const routes: Routes = [
  {path: "login", component: InicioSesionComponent},
  {path: "inicio", component: PantallaPrincipalComponent},
  {path: "administrador", component: AdministracionUsuariosComponent, 
         children:[
          {path: "gestion-estudiantes", component: GestionEstudiantesComponent},
          {path: "gestion-docentes", component: GestionDocentesComponent}
         ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
