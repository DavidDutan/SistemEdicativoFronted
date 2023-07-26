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
  perfilAccesoSub!: Subscription;

  constructor(private dashboardService: DashboardService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.perfilAccesoSub = this.usuarioService.perfilAcceso$.subscribe(perfil => {
      this.perfilAcceso = perfil;
    });
  }

  ngOnDestroy() {
    if (this.perfilAccesoSub) {
      this.perfilAccesoSub.unsubscribe();
    }
  }

  showComponent(componentName: string): void {
    this.dashboardService.showComponent(componentName);
    this.activeLink = componentName;
  }

  @HostListener('click', ['$event.target'])
  onElementClicked(element: HTMLElement) {
    if (element.tagName === 'A') {
      this.activeLink = element.getAttribute('name') || '';
    }
    if (element.className.includes('bx bx-menu')) {
      this.isSidebarHidden = !this.isSidebarHidden;
      this.dashboardService.changeSidebarState(this.isSidebarHidden);
    }
  }
}
