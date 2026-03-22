import {Routes} from '@angular/router';
import {PresupuestoApp} from './components/presupuesto-app/presupuesto-app';
import {HomeApp} from './components/home-app/home-app';
import {Page404} from './components/page404/page404';
import {MostrarMensaje} from './components/mostrar-mensaje/mostrar-mensaje';
import {EditComponent} from './components/presupuesto-app/edit-component/edit-component';

export const routes: Routes = [
  {path: "", component: HomeApp},
  {
    path: "presupuesto", component: PresupuestoApp, children: [
      {path: "edicion/:id", component: EditComponent}
    ]
  },
  {path: "mensaje", component: MostrarMensaje},
  {path: "**", component: Page404}
];
