import { Component, HostListener } from '@angular/core';
import { DashboardService } from 'src/app/service/components/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  activeLink: string = '';
  isSidebarHidden: boolean = false;

  constructor(private dashboardService: DashboardService) { }

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
