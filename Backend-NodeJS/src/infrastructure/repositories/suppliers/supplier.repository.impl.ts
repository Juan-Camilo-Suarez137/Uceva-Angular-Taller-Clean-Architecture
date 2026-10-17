import { Supplier } from "../../../domain/models/suppliers/supplier.model";
import { SupplierRepository } from "../../../domain/repositories/suppliers/supplier.repository";
import { SupplierDatasource } from "../../datasources/suppliers/supplier.datasource";

/**
 * Implementación concreta del repositorio de proveedores.
 *
 * @remarks
 * Pertenece a la **capa de infraestructura**. Cumple el contrato
 * `SupplierRepository` y delega la obtención de datos al `SupplierDatasource`.
 */
export class SupplierRepositoryImpl extends SupplierRepository {

  /**
   * Crea el repositorio.
   *
   * @param datasource Datasource que genera los proveedores
   */
  constructor(private datasource: SupplierDatasource) {
    super();
  }

  /**
   * Obtiene un listado de proveedores.
   *
   * @param countSuppliers Cantidad de proveedores a obtener
   * @returns Promesa que resuelve un arreglo de proveedores
   */
  getAll(countSuppliers: number): Promise<Supplier[]> {
    return this.datasource.getAll(countSuppliers);
  }
}
