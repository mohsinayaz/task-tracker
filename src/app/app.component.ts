import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private uiService: UiService) {}

  hasRoute(url) {
    return this.uiService.routeIsHome(url);
  }
}
