import {Component, effect, inject, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Transaction} from '../../../types';
import {PresupuestoService} from '../../../services/presupuesto/presupuesto-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-component',
  imports: [
    FormsModule
  ],
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css',
})
export class EditComponent {
  protected presupuestoService = inject(PresupuestoService);
  protected idRoute = signal<number | null>(null);
  protected transactionToEdit = signal<Transaction>({
    id: 0,
    type: "",
    description: "",
    amount: 0
  });

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idRoute.set(Number(this.route.snapshot.paramMap.get("id")));
      const transaction = this.presupuestoService.getTransaction(this.idRoute()!)!;

      if (transaction !== null && transaction !== undefined) {
        this.transactionToEdit.set({...transaction});
      } else {
        alert("NO SE ENCONTRO LA TRANSACCION");
        setTimeout(() => {
          this.router.navigate(["/presupuesto"]);
        }, 3500)
      }
    });
  }

  protected updateTransaction() {
    this.presupuestoService.updateTransaction(this.transactionToEdit());
    this.router.navigate(["/presupuesto"]);
  }
}
