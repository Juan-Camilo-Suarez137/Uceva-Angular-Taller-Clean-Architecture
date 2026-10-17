import { Commerce } from "../../models/commerce/commerce.model";

/**
 * Contrato del repositorio de artículos comerciales.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de Domain**
 * y define el contrato que deben cumplir todas las
 * implementaciones de repositorios de comercio.
 *
 * El dominio:
 * - NO conoce detalles de infraestructura
 * - NO sabe de bases de datos, APIs o frameworks
 *
 * Cualquier fuente de datos (API, base de datos, mocks,
 * archivos, etc.) puede ser utilizada siempre que
 * implemente este contrato.
 *
 * Los casos de uso dependen de esta abstracción,
 * no de implementaciones concretas.
 *
 * @see {@link Commerce}
 */
export abstract class CommerceRepository {
  /**
   * Obtiene un listado de artículos comerciales.
   *
   * @remarks
   * Este método define una **operación de negocio**
   * relacionada con la obtención de artículos comerciales,
   * sin especificar cómo ni desde dónde se obtienen.
   *
   * @param countCommerce - Cantidad de artículos comerciales a obtener
   * @returns Promesa que resuelve un arreglo de {@link Commerce}
   */
  abstract getAll(countCommerce: number): Promise<Commerce[]>;
}
