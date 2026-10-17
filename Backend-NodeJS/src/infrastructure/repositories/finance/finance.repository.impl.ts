import { Finance } from "../../../domain/models/finance/finance.model";
import { FinanceRepository } from "../../../domain/repositories/finance/finance.repository";
import { FinanceDatasource } from "../../datasources/finance/finance.datasource";

/**
 * Implementación concreta del repositorio de finanzas.
 *
 * @remarks
 * Pertenece a la **capa de infraestructura**. Cumple el contrato
 * `FinanceRepository` y delega la obtención de datos al `FinanceDatasource`.
 */
export class FinanceRepositoryImpl extends FinanceRepository {

  /**
   * Crea el repositorio.
   *
   * @param datasource Datasource que genera las transacciones
   */
  constructor(private datasource: FinanceDatasource) {
    super();
  }

  /**
   * Obtiene un listado de transacciones.
   *
   * @param countFinance Cantidad de transacciones a obtener
   * @returns Promesa que resuelve un arreglo de transacciones
   */
  getAll(countFinance: number): Promise<Finance[]> {
    return this.datasource.getAll(countFinance);
  }
}