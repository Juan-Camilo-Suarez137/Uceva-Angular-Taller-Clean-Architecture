import { Observable } from 'rxjs';
import { Supplier } from '../../models/suppliers/supplier.model';

/**
 * Contrato del repositorio de proveedores.
 *
 * @description
 * Esta clase abstracta define el **contrato de acceso a datos**
 * para la entidad `Supplier` dentro del dominio.
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
 * @see Supplier
 */
export abstract class SupplierRepository {

  /**
   * Obtiene el listado de proveedores.
   *
   * @param countSuppliers - Cantidad de proveedores a solicitar
   * @returns {Observable<Supplier[]>}
   * Observable que emite un arreglo de proveedores del dominio.
   *
   * @remarks
   * - No define la fuente de datos.
   * - No gestiona errores de presentación.
   * - Propaga los errores al consumidor.
   */
  abstract getAll(countSuppliers: number): Observable<Supplier[]>;
}
