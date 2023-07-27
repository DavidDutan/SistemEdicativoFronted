import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/service/components/dashboard.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  activeLink: string = '';
  isSidebarHidden: boolean = false;
  perfilAcceso: string = '';
  usuarioSub!: Subscription;


  constructor(private dashboardService: DashboardService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioSub = this.usuarioService.usuario$.subscribe(usuario => {
      this.perfilAcceso = usuario ? usuario.usuPerfilAcceso || '' : '';
    });
  }

  ngOnDestroy() {
    if (this.usuarioSub) {
      this.usuarioSub.unsubscribe();
    }
  }
  
  showComponent(componentName: string): void {
    this.dashboardService.showComponent(componentName);
    this.activeLink = componentName;
  }

  @HostListener('click', ['$event.target'])
  onElementClicked(element: HTMLElement) {
    if (element.tagName === 'A') {
      let componentName = element.getAttribute('name') || '';
      this.activeLink = componentName;
      this.dashboardService.showComponent(componentName);
      if (element.className.includes('logout')) {
        this.usuarioService.limpiarUsuario();
      }
    }
    if (element.className.includes('bx bx-menu')) {
      this.isSidebarHidden = !this.isSidebarHidden;
      this.dashboardService.changeSidebarState(this.isSidebarHidden);
    }
  }
}
