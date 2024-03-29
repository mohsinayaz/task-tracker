import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private uiService: UiService) { }

  ngOnInit(): void { }

  hasRoute(url) {
    return this.uiService.routeIsHome(url);
  }
}
