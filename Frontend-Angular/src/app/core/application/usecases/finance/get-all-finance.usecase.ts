import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Finance } from '../../../domain/models/finance/finance.model';
import { FinanceRepository } from '../../../domain/repositories/finance/finance.repository';

/**
 * Caso de uso para obtener el listado de transacciones.
 *
 * @description
 * Este caso de uso pertenece a la **capa de aplicación** y representa
 * una acción del sistema orientada al negocio: recuperar las
 * transacciones del módulo de finanzas.
 *
 * Actúa como intermediario entre la capa de presentación y el dominio,
 * delegando la obtención de datos al contrato `FinanceRepository`.
 *
 * @remarks
 * - No conoce detalles de infraestructura.
 * - No sabe si los datos vienen de Local, Node.js o Spring Boot.
 * - Propaga los resultados y errores al consumidor.
 *
 * @example
 * ```ts
 * this.getAllFinanceUseCase.execute(10).subscribe(finances => {
 *   // manejo de resultados
 * });
 * ```
 *
 * @architecture Clean Architecture
 * @layer Application
 *
 * @see Finance
 * @see FinanceRepository
 */
@Injectable()
export class GetAllFinanceUseCase {

  /**
   * Repositorio de finanzas inyectado por contrato.
   *
   * @remarks
   * La implementación concreta se define en `app.config.ts`.
   */
  private financeRepository = inject(FinanceRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countFinance - Cantidad de transacciones a solicitar
   * @returns {Observable<Finance[]>}
   * Observable que emite el listado de transacciones del dominio.
   */
  execute(countFinance: number): Observable<Finance[]> {
    return this.financeRepository.getAll(countFinance);
  }
}