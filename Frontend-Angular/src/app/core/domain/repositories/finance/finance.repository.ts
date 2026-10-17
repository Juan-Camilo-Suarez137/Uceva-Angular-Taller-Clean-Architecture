import { Observable } from 'rxjs';
import { Finance } from '../../models/finance/finance.model';

/**
 * Contrato del repositorio de finanzas.
 *
 * @description
 * Esta clase abstracta define el **contrato de acceso a datos**
 * para la entidad `Finance` dentro del dominio.
 *
 * Forma parte de la **capa de dominio** y establece las operaciones
 * que cualquier implementación concreta debe cumplir, sin exponer
 * detalles de infraestructura (HTTP, mocks, Node.js, Spring Boot, etc.).
 *
 * @remarks
 * Las implementaciones concretas (Local, Node.js y Spring Boot) residen
 * en la capa de infraestructura y se intercambian desde `app.config.ts`
 * sin afectar los casos de uso ni los componentes.
 *
 * @architecture Clean Architecture
 * @layer Domain
 *
 * @see Finance
 */
export abstract class FinanceRepository {

  /**
   * Obtiene el listado de transacciones.
   *
   * @param countFinance - Cantidad de transacciones a solicitar
   * @returns {Observable<Finance[]>}
   * Observable que emite un arreglo de transacciones del dominio.
   *
   * @remarks
   * - No define la fuente de datos.
   * - No gestiona errores de presentación.
   * - Propaga los errores al consumidor.
   */
  abstract getAll(countFinance: number): Observable<Finance[]>;
}