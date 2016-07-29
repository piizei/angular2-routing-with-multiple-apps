import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'two',
  template: `
    <h1>App two</h1>
    <nav>
      <a routerLink="/sub1-app2" routerLinkActive="active">Sub route test page 1</a>
      <a routerLink="/sub2-app2" routerLinkActive="active">Sub route test page 2</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppTwoComponent { }
