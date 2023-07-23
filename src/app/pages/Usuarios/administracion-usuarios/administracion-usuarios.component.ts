import { Component,  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/service/components/dashboard.service';

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './administracion-usuarios.component.html',
  styleUrls: ['./administracion-usuarios.component.scss']
})
export class AdministracionUsuariosComponent implements OnDestroy {

  componentToShow: string = '';
  isSidebarHidden: boolean = false;
  
  private subs: Subscription[] = [];

  constructor(private dashboardService: DashboardService) {
    this.subs.push(
      this.dashboardService.componentToShow$.subscribe(componentName => {
        this.componentToShow = componentName;
      }),
      
      // Se agrega la suscripción al estado del sidebar
      this.dashboardService.sidebarState$.subscribe((isHidden) => {
        this.isSidebarHidden = isHidden;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
