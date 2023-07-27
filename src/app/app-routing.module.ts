import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './pages/Autentificacion/inicio-sesion/inicio-sesion.component';
import { PantallaPrincipalComponent } from './pages/Autentificacion/pantalla-principal/pantalla-principal.component';
import { AdministracionUsuariosComponent } from './pages/Usuarios/administracion-usuarios/administracion-usuarios.component';
import { RegistroCalifiacionesComponent } from './pages/Calificaciones/registro-califiaciones/registro-califiaciones.component';
import { GestionDocentesComponent } from './pages/Docentes/gestion-docentes/gestion-docentes.component';
import { GestionEstudiantesComponent } from './pages/Inscripciones/gestion-estudiantes/gestion-estudiantes.component';
import { GestionGruposComponent } from './pages/Grupos/gestion-grupos/gestion-grupos.component';
import { GestionMatriculasComponent } from './pages/Matriculas/gestion-matriculas/gestion-matriculas.component';
import { GestionAsignaturasComponent } from './pages/Planes-Estudio/gestion-asignaturas/gestion-asignaturas.component';
import { EstudianteUsuarioComponent } from './pages/Usuarios/estudiante-usuario/estudiante-usuario.component';
import { ConsultaCalificacionesComponent } from './pages/Calificaciones/consulta-calificaciones/consulta-calificaciones.component';
import { ConsultaCertificadosComponent } from './pages/Certificados/consulta-certificados/consulta-certificados.component';
import { RegistroHorariosComponent } from './pages/Grupos/registro-horarios/registro-horarios.component';
import { RecuperacionContraseniaComponent } from './pages/Autentificacion/recuperacion-contrasenia/recuperacion-contrasenia.component';
import { DocenteUsuarioComponent } from './pages/Usuarios/docente-usuario/docente-usuario.component';
import { EdificioComponent } from './pages/Espacios/edificio/edificio.component';
import { AulaComponent } from './pages/Espacios/aula/aula.component';

const routes: Routes = [
  {path: "login", component: InicioSesionComponent},
  {path: "recuperar", component: RecuperacionContraseniaComponent},
  {path: "", component: PantallaPrincipalComponent},
  {path: "administrador", component: AdministracionUsuariosComponent, 
         children:[
          {path: "gestion-estudiantes", component: GestionEstudiantesComponent},
          {path: "gestion-docentes", component: GestionDocentesComponent},
          {path: "gestion-grupos", component: GestionGruposComponent},
          {path: "gestion-matriculas", component: GestionMatriculasComponent},
          {path: "gestion-asignaturas", component: GestionAsignaturasComponent}, 
          {path: "registro-horarios", component: RegistroHorariosComponent},
          {path: "registro-aula", component: AulaComponent},
          {path: "registro-edificio", component: EdificioComponent}
         ]
  },
  {path: "estudiante", component: EstudianteUsuarioComponent, 
         children:[
          {path: "consulta-calificaciones", component: ConsultaCalificacionesComponent},
          {path: "consulta-certificados", component: ConsultaCertificadosComponent}
         ]
  },
  {path: "docente", component: DocenteUsuarioComponent, 
         children:[
          {path: "registro-calificaciones", component: RegistroCalifiacionesComponent},
         ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
