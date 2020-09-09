import { Route } from '@angular/router';

export interface MykylRouteData {
  scrollDisabled?: boolean;
  toolbarShadowEnabled?: boolean;
  containerEnabled?: boolean;

  [key: string]: any;
}

export interface mykylRoute extends Route {
  data?: MykylRouteData;
  children?: mykylRoute[];
}

export type mykylRoutes = mykylRoute[];