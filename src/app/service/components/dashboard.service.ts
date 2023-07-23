import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private componentToShowSource = new Subject<string>();
  componentToShow$ = this.componentToShowSource.asObservable();

  private menuCollapsedSource = new BehaviorSubject<boolean>(false);
  menuCollapsed$ = this.menuCollapsedSource.asObservable();

  constructor() {}

  showComponent(componentName: string): void {
    this.componentToShowSource.next(componentName);
  }
}
