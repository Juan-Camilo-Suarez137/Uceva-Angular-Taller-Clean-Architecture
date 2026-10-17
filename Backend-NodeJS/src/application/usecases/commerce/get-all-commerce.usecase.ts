import { Commerce } from "../../../domain/models/commerce/commerce.model";
import { CommerceRepository } from "../../../domain/repositories/commerce/commerce.repository";

/**
 * Caso de uso para obtener un listado de artículos comerciales.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Application**
 * y representa una **regla de negocio de la aplicación**.
 *
 * Su responsabilidad es:
 * - Orquestar la obtención de artículos comerciales
 * - Coordinar la interacción con el repositorio
 *
 * ❗ No conoce detalles de infraestructura.
 * ❗ No depende de implementaciones concretas.
 *
 * Depende únicamente del contrato
 * {@link CommerceRepository} definido en el dominio.
 *
 * @see {@link CommerceRepository}
 * @see {@link Commerce}
 */
export class GetAllCommerceUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param commerceRepository - Repositorio de comercio
   * utilizado para acceder a los datos
   */
  constructor(private commerceRepository: CommerceRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene una cantidad determinada de artículos comerciales
   * delegando el acceso a datos al repositorio.
   *
   * @param countCommerce - Cantidad de artículos comerciales a obtener
   * @returns Promesa que resuelve un arreglo de {@link Commerce}
   *
   * @example
   * ```ts
   * const useCase = new GetAllCommerceUseCase(commerceRepository);
   * const commerceList = await useCase.execute(10);
   * ```
   */
  execute(countCommerce: number): Promise<Commerce[]> {
    return this.commerceRepository.getAll(countCommerce);
  }
}
