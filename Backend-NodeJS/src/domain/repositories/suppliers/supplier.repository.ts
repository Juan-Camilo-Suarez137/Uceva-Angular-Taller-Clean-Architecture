import { Supplier } from "../../models/suppliers/supplier.model";

/**
 * Contrato del repositorio de proveedores.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de dominio** y define
 * las operaciones que cualquier implementación concreta debe cumplir,
 * sin exponer detalles de infraestructura (faker, base de datos, HTTP, etc.).
 *
 * @architecture Clean Architecture
 * @layer Domain
 */
export abstract class SupplierRepository {
  /**
   * Obtiene un listado de proveedores.
   *
   * @param countSuppliers Cantidad de proveedores a obtener
   * @returns Promesa que resuelve un arreglo de proveedores
   */
  abstract getAll(countSuppliers: number): Promise<Supplier[]>;
}
