import { Commerce } from "../../../domain/models/commerce/commerce.model";
import { CommerceRepository } from "../../../domain/repositories/commerce/commerce.repository";
import { CommerceDatasource } from "../../datasources/commerce/commerce.datasource";

/**
 * Implementación concreta del repositorio de artículos comerciales.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * un **adaptador (Repository Implementation)** entre:
 *
 * - El contrato del dominio {@link CommerceRepository}
 * - La fuente de datos {@link CommerceDatasource}
 *
 * Su responsabilidad es:
 * - Cumplir el contrato definido por el dominio
 * - Delegar la obtención de datos al datasource
 * - Adaptar o transformar los datos si fuese necesario
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No debe ser utilizada directamente por los casos de uso.
 *
 * Los casos de uso dependen únicamente del contrato
 * {@link CommerceRepository}, no de esta implementación.
 *
 * @see {@link CommerceRepository}
 * @see {@link CommerceDatasource}
 */
export class CommerceRepositoryImpl extends CommerceRepository {

  /**
   * Crea una nueva instancia del repositorio de comercio.
   *
   * @param datasource - Fuente de datos utilizada para
   * obtener la información de artículos comerciales
   */
  constructor(private datasource: CommerceDatasource) {
    super();
  }

  /**
   * Obtiene el listado de artículos comerciales.
   *
   * @remarks
   * Implementa el método definido en
   * {@link CommerceRepository#getAll}.
   *
   * @param countCommerce - Cantidad de artículos comerciales a obtener
   * @returns Promesa que resuelve un arreglo de {@link Commerce}
   *
   * @example
   * ```ts
   * const repository = new CommerceRepositoryImpl(new CommerceDatasource());
   * const commerceList = await repository.getAll(10);
   * ```
   */
  getAll(countCommerce: number): Promise<Commerce[]> {
    return this.datasource.getAll(countCommerce);
  }
}
