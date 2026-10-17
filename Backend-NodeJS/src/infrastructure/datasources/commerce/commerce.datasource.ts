import { faker } from '@faker-js/faker';
import { Commerce, CommerceDepartment } from "../../../domain/models/commerce/commerce.model";

/**
 * Datasource encargado de generar artículos comerciales simulados.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * una **fuente de datos (Datasource)**.
 *
 * Utiliza la librería {@link https://www.npmjs.com/package/@faker-js/faker | faker}
 * para generar información comercial ficticia.
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No implementa repositorios del dominio.
 *
 * Es consumida por `CommerceRepositoryImpl`, que se encarga
 * de adaptar los datos al dominio y exponerlos mediante
 * el contrato `CommerceRepository`.
 */
export class CommerceDatasource {

  /**
   * Departamentos disponibles para los artículos comerciales simulados.
   *
   * @remarks
   * Se utiliza para asignar un departamento aleatorio
   * a cada artículo comercial generado.
   */
  private departments: CommerceDepartment[] = [
    'Tecnologia',
    'Hogar',
    'Ropa',
    'Deportes',
    'Juguetes'
  ];

  /**
   * Obtiene una lista de artículos comerciales simulados.
   *
   * @remarks
   * Genera dinámicamente una cantidad determinada de artículos comerciales
   * utilizando datos aleatorios.
   *
   * @param countCommerce - Cantidad de artículos comerciales a generar
   * @returns Promesa que resuelve un arreglo de {@link Commerce}
   *
   * @example
   * ```ts
   * const datasource = new CommerceDatasource();
   * const commerceList = await datasource.getAll(10);
   * ```
   */
  async getAll(countCommerce: number): Promise<Commerce[]> {
    const commerceItems: Promise<Commerce>[] = [];

    for (let i = 1; i <= countCommerce; i++) {
      commerceItems.push(this.generateCommerce(i));
    }

    return Promise.all(commerceItems);
  }

  /**
   * Genera un artículo comercial individual con datos simulados.
   *
   * @remarks
   * Este método es interno y no debe ser utilizado
   * fuera del datasource.
   *
   * @param id - Identificador único del artículo comercial
   * @returns Promesa que resuelve un {@link Commerce}
   */
  private generateCommerce(id: number): Promise<Commerce> {
    return Promise.resolve({
      id,
      product: faker.commerce.productName(),
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productDescription(),
      isbn: faker.commerce.isbn(),
      price: Number(
        faker.commerce.price({ min: 10, max: 500, dec: 2 })
      ),
      department: faker.helpers.arrayElement(this.departments),
    });
  }

}
