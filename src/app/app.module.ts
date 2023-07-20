import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './pages/Autentificacion/inicio-sesion/inicio-sesion.component';
import { RecuperacionContraseniaComponent } from './pages/Autentificacion/recuperacion-contrasenia/recuperacion-contrasenia.component';
import { PerfilUsuarioComponent } from './pages/Usuarios/perfil-usuario/perfil-usuario.component';
import { AdministracionUsuariosComponent } from './pages/Usuarios/administracion-usuarios/administracion-usuarios.component';
import { RegistroHorariosComponent } from './pages/Grupos/registro-horarios/registro-horarios.component';
import { GestionEstudiantesComponent } from './pages/Inscripciones/gestion-estudiantes/gestion-estudiantes.component';
import { GestionDocentesComponent } from './pages/Docentes/gestion-docentes/gestion-docentes.component';
import { GestionGruposComponent } from './pages/Grupos/gestion-grupos/gestion-grupos.component';
import { RegistroCalifiacionesComponent } from './pages/Calificaciones/registro-califiaciones/registro-califiaciones.component';
import { ConsultaCalificacionesComponent } from './pages/Calificaciones/consulta-calificaciones/consulta-calificaciones.component';
import { GestionMatriculasComponent } from './pages/Matriculas/gestion-matriculas/gestion-matriculas.component';
import { ConsultaCertificadosComponent } from './pages/Certificados/consulta-certificados/consulta-certificados.component';
import { RegistroIEComponent } from './pages/Finanzas/registro-ie/registro-ie.component';
import { EmisionComprobantesComponent } from './pages/Finanzas/emision-comprobantes/emision-comprobantes.component';
import { GeneracionReportesComponent } from './pages/Reportes/generacion-reportes/generacion-reportes.component';
import { SistemaConfgComponent } from './pages/Configuracion/sistema-confg/sistema-confg.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PantallaPrincipalComponent } from './pages/Autentificacion/pantalla-principal/pantalla-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RecuperacionContraseniaComponent,
    PerfilUsuarioComponent,
    AdministracionUsuariosComponent,
    RegistroHorariosComponent,
    GestionEstudiantesComponent,
    GestionDocentesComponent,
    GestionGruposComponent,
    RegistroCalifiacionesComponent,
    ConsultaCalificacionesComponent,
    GestionMatriculasComponent,
    ConsultaCertificadosComponent,
    RegistroIEComponent,
    EmisionComprobantesComponent,
    GeneracionReportesComponent,
    SistemaConfgComponent,
    DashboardComponent,
    PantallaPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
