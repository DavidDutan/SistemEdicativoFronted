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
  private sub: Subscription;

  constructor(private dashboardService: DashboardService) {
    this.sub = this.dashboardService.componentToShow$.subscribe(componentName => {
      this.componentToShow = componentName;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
