import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showTask: boolean = false;
  private subject = new Subject<any>();
  constructor(private router: Router) {}

  toggleAddTask(): void {
    this.showTask = !this.showTask;
    this.subject.next(this.showTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  routeIsHome(url) {
    return this.router.url === url;
  }
}
