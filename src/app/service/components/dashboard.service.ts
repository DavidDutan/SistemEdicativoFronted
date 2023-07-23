import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private componentToShowSource = new Subject<string>();
  componentToShow$ = this.componentToShowSource.asObservable();

  private sidebarStateSource = new Subject<boolean>();
  sidebarState$ = this.sidebarStateSource.asObservable();

  constructor() {}

  showComponent(componentName: string): void {
    this.componentToShowSource.next(componentName);
  }

  changeSidebarState(state: boolean): void {
    this.sidebarStateSource.next(state);
  }
}
