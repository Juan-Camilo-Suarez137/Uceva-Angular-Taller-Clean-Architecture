import { Supplier } from "../../../domain/models/suppliers/supplier.model";
import { SupplierRepository } from "../../../domain/repositories/suppliers/supplier.repository";

/**
 * Caso de uso para obtener el listado de proveedores.
 *
 * @remarks
 * Pertenece a la **capa de aplicación**. Recibe el repositorio por
 * contrato (`SupplierRepository`), así que no conoce de dónde salen los datos.
 *
 * @architecture Clean Architecture
 * @layer Application
 */
export class GetAllSuppliersUseCase {

  /**
   * Crea el caso de uso.
   *
   * @param supplierRepository Repositorio de proveedores inyectado por contrato
   */
  constructor(private supplierRepository: SupplierRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @param countSuppliers Cantidad de proveedores a obtener
   * @returns Promesa que resuelve un arreglo de proveedores
   */
  execute(countSuppliers: number): Promise<Supplier[]> {
    return this.supplierRepository.getAll(countSuppliers);
  }
}
