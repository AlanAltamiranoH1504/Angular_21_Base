import { Routes } from '@angular/router';
import {PresupuestoApp} from './components/presupuesto-app/presupuesto-app';
import {HomeApp} from './components/home-app/home-app';

export const routes: Routes = [
  {path: "", component: HomeApp},
  {path: "presupuesto", component: PresupuestoApp}
];
