import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'one',
  template: `
    <h1>App one</h1>
    <nav>
      <a routerLink="/sub1-app1" routerLinkActive="active">Sub route test page 1</a>
      <a routerLink="/sub2-app1" routerLinkActive="active">Sub route test page 2</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppOneComponent { }
