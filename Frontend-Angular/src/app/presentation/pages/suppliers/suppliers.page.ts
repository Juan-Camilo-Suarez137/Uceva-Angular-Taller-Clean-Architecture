import { Component, inject } from '@angular/core';
import { GetAllSuppliersUseCase } from '../../../core/application/usecases/suppliers/get-all-suppliers.usecase';
import { Supplier } from '../../../core/domain/models/suppliers/supplier.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { SuppliersTableComponent } from '../../components/suppliers-table/suppliers-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Componente contenedor de proveedores.
 *
 * Se utiliza para gestionar y mostrar un listado de proveedores
 * utilizando el componente `SuppliersTableComponent`.
 *
 * @remarks
 * Este componente consume el caso de uso `GetAllSuppliersUseCase`.
 * No conoce el servicio ni el backend: si los datos vienen de Local,
 * Node.js o Spring Boot lo decide `app.config.ts`.
 *
 */
@Component({
  selector: 'app-suppliers',
  templateUrl: `./suppliers.page.html`,
  imports: [SuppliersTableComponent, AlertComponent],
  providers: [GetAllSuppliersUseCase]
})
export class SuppliersPage {
  /**
   * Listado de proveedores obtenidos desde el caso de uso.
   * @type {Supplier[]}
   */
  suppliers: Supplier[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Caso de uso para obtener proveedores.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private getAllSuppliersUseCase = inject(GetAllSuppliersUseCase);

  /**
   * Inicializa el componente y carga los proveedores.
   * @remarks
   * Ejecuta el caso de uso `GetAllSuppliersUseCase` y
   * asigna los datos recibidos a la propiedad `suppliers`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.getAllSuppliersUseCase.execute(10).subscribe({
      next: (suppliers) => {
        this.suppliers = suppliers;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    })
  }
}
