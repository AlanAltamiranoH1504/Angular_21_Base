import { Component } from '@angular/core';
import {Auth} from '../auth/auth';
import {CalculadoraOutput} from '../calculadora-output/calculadora-output';
import {Calculator} from '../calculator/calculator';
import {ComponenteInline} from '../../componente-inline/componente-inline';
import {ComponentePadre} from '../dedecorador-input/componente-padre/componente-padre';
import {HandlePersonsService} from '../handle-persons-service/handle-persons-service';
import {HandleService} from '../handle-service/handle-service';
import {Hijo} from '../hijo/hijo';
import {HomeworkFor} from '../homework-for/homework-for';
import {Interpolacion} from '../interpolacion/interpolacion';
import {LocalReference} from '../local-reference/local-reference';
import {NuevoComponente} from '../nuevo-componente/nuevo-componente';
import {Padre} from '../../padre/padre';
import {Pipes} from '../pipes/pipes';
import {Replicador} from '../replicador/replicador';
import {Saludar} from '../saludar/saludar';
import {ShowMessageComponent} from '../show-message-component/show-message-component';
import {TiendaOnline} from '../tienda-online/tienda-online';

@Component({
  selector: 'app-home-app',
  imports: [
    Auth,
    CalculadoraOutput,
    Calculator,
    ComponenteInline,
    ComponentePadre,
    HandlePersonsService,
    HandleService,
    Hijo,
    HomeworkFor,
    Interpolacion,
    LocalReference,
    NuevoComponente,
    Padre,
    Pipes,
    Replicador,
    Saludar,
    ShowMessageComponent,
    TiendaOnline
  ],
  templateUrl: './home-app.html',
  styleUrl: './home-app.css',
})
export class HomeApp {

}
