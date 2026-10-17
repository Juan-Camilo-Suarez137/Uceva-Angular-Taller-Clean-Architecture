import { Finance } from "../../models/finance/finance.model";

/**
 * Contrato del repositorio de finanzas.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de dominio** y define
 * las operaciones que cualquier implementación concreta debe cumplir,
 * sin exponer detalles de infraestructura (faker, base de datos, HTTP, etc.).
 *
 * @architecture Clean Architecture
 * @layer Domain
 */
export abstract class FinanceRepository {
  /**
   * Obtiene un listado de transacciones.
   *
   * @param countFinance Cantidad de transacciones a obtener
   * @returns Promesa que resuelve un arreglo de transacciones
   */
  abstract getAll(countFinance: number): Promise<Finance[]>;
}