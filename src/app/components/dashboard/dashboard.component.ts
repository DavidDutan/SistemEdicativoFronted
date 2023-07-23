import { Component, HostListener } from '@angular/core';
import { DashboardService } from 'src/app/service/components/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isSidebarHidden: boolean = false;

  constructor(private dashboardService: DashboardService) { }

  showComponent(componentName: string): void {
    this.dashboardService.showComponent(componentName);
  }
}
