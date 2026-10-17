import { Observable } from 'rxjs';
import { Commerce } from '../../models/commerce/commerce.model';

/**
 * Contrato del repositorio de artículos comerciales.
 *
 * @description
 * Esta clase abstracta define el **contrato de acceso a datos**
 * para la entidad `Commerce` dentro del dominio.
 *
 * Forma parte de la **capa de dominio** y establece las operaciones
 * que cualquier implementación concreta debe cumplir, sin exponer
 * detalles de infraestructura (HTTP, base de datos, mocks, etc.).
 *
 * @remarks
 * Las implementaciones concretas de este repositorio pueden residir
 * en la capa de infraestructura y ser intercambiables sin afectar
 * al resto del sistema.
 *
 * @example
 * ```ts
 * // Inyección de dependencia por contrato
 * constructor(private commerceRepository: CommerceRepository) {}
 * ```
 *
 * @architecture Clean Architecture
 * @layer Domain
 *
 * @see Commerce
 */
export abstract class CommerceRepository {

  /**
   * Obtiene el listado completo de artículos comerciales.
   *
   * @param countCommerce - Cantidad de artículos comerciales a solicitar
   * @returns {Observable<Commerce[]>}
   * Observable que emite un arreglo de artículos comerciales del dominio.
   *
   * @remarks
   * - No define la fuente de datos.
   * - No gestiona errores de presentación.
   * - Propaga los errores al consumidor.
   */
  abstract getAll(countCommerce: number): Observable<Commerce[]>;
}
