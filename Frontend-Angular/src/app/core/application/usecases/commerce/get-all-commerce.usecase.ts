import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commerce } from '../../../domain/models/commerce/commerce.model';
import { CommerceRepository } from '../../../domain/repositories/commerce/commerce.repository';

/**
 * Caso de uso para obtener el listado completo de artículos comerciales.
 *
 * @description
 * Este caso de uso pertenece a la **capa de aplicación** y representa
 * una acción del sistema orientada al negocio: recuperar todos los
 * artículos comerciales disponibles.
 *
 * Actúa como intermediario entre la capa de presentación y el dominio,
 * delegando la obtención de datos al contrato `CommerceRepository`.
 *
 * @remarks
 * - No conoce detalles de infraestructura.
 * - No transforma los datos para la UI.
 * - Propaga los resultados y errores al consumidor.
 *
 * La dependencia se resuelve mediante **inyección por contrato**
 * utilizando la función `inject()` de Angular.
 *
 * @example
 * ```ts
 * this.getAllCommerceUseCase.execute(10).subscribe(commerce => {
 *   // manejo de resultados
 * });
 * ```
 *
 * @architecture Clean Architecture
 * @layer Application
 *
 * @see Commerce
 * @see CommerceRepository
 */
@Injectable()
export class GetAllCommerceUseCase {

  /**
   * Repositorio de comercio inyectado por contrato.
   *
   * @remarks
   * La implementación concreta se define en la capa de infraestructura.
   */
  private commerceRepository = inject(CommerceRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countCommerce - Cantidad de artículos comerciales a solicitar
   * @returns {Observable<Commerce[]>}
   * Observable que emite el listado completo de artículos comerciales del dominio.
   *
   * @remarks
   * - Delegación directa al repositorio.
   * - No contiene lógica de presentación.
   * - Mantiene el principio de responsabilidad única.
   */
  execute(countCommerce: number): Observable<Commerce[]> {
    return this.commerceRepository.getAll(countCommerce);
  }
}
