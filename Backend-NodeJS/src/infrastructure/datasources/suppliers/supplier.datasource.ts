import { faker } from '@faker-js/faker';
import { Supplier, SupplierStatus } from "../../../domain/models/suppliers/supplier.model";

/**
 * Datasource de proveedores.
 *
 * @remarks
 * Pertenece a la **capa de infraestructura**. Genera proveedores
 * ficticios con los módulos `faker.company`, `faker.location`,
 * `faker.internet` y `faker.phone`.
 */
export class SupplierDatasource {

    /**
     * Obtiene un listado de proveedores generados dinámicamente.
     *
     * @param countSuppliers Cantidad de proveedores a generar
     * @returns Promesa que resuelve un arreglo de proveedores
     */
    async getAll(countSuppliers: number): Promise<Supplier[]> {
        const suppliers: Promise<Supplier>[] = [];

        for (let i = 1; i <= countSuppliers; i++) {
            suppliers.push(this.generateSupplier(i));
        }

        return Promise.all(suppliers);
    }

    /**
     * Genera un proveedor ficticio.
     *
     * @param id Identificador único del proveedor
     * @returns Promesa que resuelve un proveedor generado
     */
    private generateSupplier(id: number): Promise<Supplier> {
        const statuses: SupplierStatus[] = ['active', 'inactive', 'pending'];

        return Promise.resolve({
            id,
            companyName: faker.company.name(),
            catchPhrase: faker.company.catchPhrase(),
            city: faker.location.city(),
            country: faker.location.country(),
            email: faker.internet.email().toLowerCase(),
            phone: faker.phone.number(),
            status: faker.helpers.arrayElement(statuses),
        });
    }

}
