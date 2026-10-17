import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../../domain/models/suppliers/supplier.model';
import { SupplierRepository } from '../../../domain/repositories/suppliers/supplier.repository';

/**
 * Caso de uso para obtener el listado de proveedores.
 *
 * @description
 * Este caso de uso pertenece a la **capa de aplicación** y representa
 * una acción del sistema orientada al negocio: recuperar los
 * proveedores del módulo de proveedores.
 *
 * Actúa como intermediario entre la capa de presentación y el dominio,
 * delegando la obtención de datos al contrato `SupplierRepository`.
 *
 * @remarks
 * - No conoce detalles de infraestructura.
 * - No sabe si los datos vienen de Local, Node.js o Spring Boot.
 * - Propaga los resultados y errores al consumidor.
 *
 * @example
 * ```ts
 * this.getAllSuppliersUseCase.execute(10).subscribe(suppliers => {
 *   // manejo de resultados
 * });
 * ```
 *
 * @architecture Clean Architecture
 * @layer Application
 *
 * @see Supplier
 * @see SupplierRepository
 */
@Injectable()
export class GetAllSuppliersUseCase {

  /**
   * Repositorio de proveedores inyectado por contrato.
   *
   * @remarks
   * La implementación concreta se define en `app.config.ts`.
   */
  private supplierRepository = inject(SupplierRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countSuppliers - Cantidad de proveedores a solicitar
   * @returns {Observable<Supplier[]>}
   * Observable que emite el listado de proveedores del dominio.
   */
  execute(countSuppliers: number): Observable<Supplier[]> {
    return this.supplierRepository.getAll(countSuppliers);
  }
}
