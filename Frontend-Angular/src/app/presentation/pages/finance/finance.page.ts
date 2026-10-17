import { Component, inject } from '@angular/core';
import { GetAllFinanceUseCase } from '../../../core/application/usecases/finance/get-all-finance.usecase';
import { Finance } from '../../../core/domain/models/finance/finance.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { FinanceTableComponent } from '../../components/finance-table/finance-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Componente contenedor de finanzas.
 *
 * Se utiliza para gestionar y mostrar un listado de transacciones
 * utilizando el componente `FinanceTableComponent`.
 *
 * @remarks
 * Este componente consume el caso de uso `GetAllFinanceUseCase`.
 * No conoce el servicio ni el backend: si los datos vienen de Local,
 * Node.js o Spring Boot lo decide `app.config.ts`.
 *
 */
@Component({
  selector: 'app-finance',
  templateUrl: `./finance.page.html`,
  imports: [FinanceTableComponent, AlertComponent],
  providers: [GetAllFinanceUseCase]
})
export class FinancePage {
  /**
   * Listado de transacciones obtenidas desde el caso de uso.
   * @type {Finance[]}
   */
  finances: Finance[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Caso de uso para obtener transacciones.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private getAllFinanceUseCase = inject(GetAllFinanceUseCase);

  /**
   * Inicializa el componente y carga las transacciones.
   * @remarks
   * Ejecuta el caso de uso `GetAllFinanceUseCase` y
   * asigna los datos recibidos a la propiedad `finances`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.getAllFinanceUseCase.execute(10).subscribe({
      next: (finances) => {
        this.finances = finances;
        this.state = 'success';
      },
      error: (error) => {
        this.state = 'error';
      },
    })
  }
}