import { Finance } from "../../../domain/models/finance/finance.model";
import { FinanceRepository } from "../../../domain/repositories/finance/finance.repository";

/**
 * Caso de uso para obtener el listado de transacciones.
 *
 * @remarks
 * Pertenece a la **capa de aplicación**. Recibe el repositorio por
 * contrato (`FinanceRepository`), así que no conoce de dónde salen los datos.
 *
 * @architecture Clean Architecture
 * @layer Application
 */
export class GetAllFinanceUseCase {

  /**
   * Crea el caso de uso.
   *
   * @param financeRepository Repositorio de finanzas inyectado por contrato
   */
  constructor(private financeRepository: FinanceRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @param countFinance Cantidad de transacciones a obtener
   * @returns Promesa que resuelve un arreglo de transacciones
   */
  execute(countFinance: number): Promise<Finance[]> {
    return this.financeRepository.getAll(countFinance);
  }
}