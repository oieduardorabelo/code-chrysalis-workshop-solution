import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import PubSub from '@aws-amplify/pubsub';
import Auth from '@aws-amplify/auth';
import API from '@aws-amplify/api';
import amplify from './aws-exports';
PubSub.configure(amplify);
Auth.configure(amplify);
API.configure(amplify);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
