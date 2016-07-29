import { provideRouter, RouterConfig } from '@angular/router';
import {SubComponent} from './sub.component'
import {Sub2Component} from './sub2.component'

const routes: RouterConfig = [
  { path: 'sub1-app1', component: SubComponent},
  { path: '', component: SubComponent,useAsDefault: true},
  { path: 'sub2-app1', component: Sub2Component}
];

export const appRouterProviders = [
  provideRouter(routes)
];
