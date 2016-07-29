import { provideRouter, RouterConfig } from '@angular/router';
import {SubComponent} from './sub.component'
import {Sub2Component} from './sub2.component'

const routes: RouterConfig = [
  { path: 'sub1-app2', component: SubComponent,useAsDefault: true},
  { path: '', component: SubComponent},
  { path: 'sub2-app2', component: Sub2Component}
];

export const appRouterProviders = [
  provideRouter(routes)
];
