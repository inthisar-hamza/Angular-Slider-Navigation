import { Component } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';

import * as ion from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  title = 'restweb';

}
