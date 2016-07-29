import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppOneComponent} from './app-one.component'
import { appRouterProviders } from './app.routes';

bootstrap(AppOneComponent, [
  appRouterProviders
]);
