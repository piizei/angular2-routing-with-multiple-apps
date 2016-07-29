import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppTwoComponent} from './app-two.component'
import { appRouterProviders } from './app.routes';

bootstrap(AppTwoComponent, [
  appRouterProviders
]);
