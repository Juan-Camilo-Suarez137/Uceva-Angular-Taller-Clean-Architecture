import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { faker } from '@faker-js/faker';
import { Observable, of } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { Supplier, SupplierStatus } from "../../../domain/models/suppliers/supplier.model";

/**
 * Servicio de infraestructura para obtener proveedores.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa
 * como un **Data Source** del módulo de proveedores, con tres orígenes:
 *
 * - Datos locales generados con `faker.company`
 * - Backend Node.js mediante HTTP
 * - Backend Spring Boot mediante HTTP
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No debe ser consumido directamente por los casos de uso ni los componentes.
 *
 * Lo usan las implementaciones del repositorio de proveedores.
 */
@Injectable({ providedIn: 'root' })
export class SuppliersService {
    /**
     * Cliente HTTP de Angular.
     */
    private httpClient = inject(HttpClient);
    /**
     * URL base del backend Node.js.
     */
    private nodeUrl = `${environment.baseUrlNode}/api`;
    /**
     * URL base del backend Spring Boot.
     */
    private springBootUrl = `${environment.baseUrlSpringBoot}/api`;

    /**
     * Obtiene el listado de proveedores desde datos locales generados con faker.
     *
     * @param countSuppliers - Cantidad de proveedores a generar
     * @returns Observable que emite un arreglo de {@link Supplier}
     */
    getAllSuppliersLocal(countSuppliers: number): Observable<Supplier[]> {
        const suppliers: Supplier[] = [];
        const statuses: SupplierStatus[] = ['active', 'inactive', 'pending'];

        for (let i = 1; i <= countSuppliers; i++) {
            suppliers.push({
                id: i,
                companyName: faker.company.name(),
                catchPhrase: faker.company.catchPhrase(),
                city: faker.location.city(),
                country: faker.location.country(),
                email: faker.internet.email().toLowerCase(),
                phone: faker.phone.number(),
                status: faker.helpers.arrayElement(statuses),
            });
        }

        return of(suppliers);
    }

    /**
     * Obtiene el listado de proveedores desde el backend Node.js.
     *
     * @param countSuppliers - Cantidad de proveedores a solicitar
     * @returns Observable que emite un arreglo de {@link Supplier}
     *
     * @example
     * ```ts
     * this.suppliersService.getAllSuppliersNode(10).subscribe(suppliers => {
     *   console.log(suppliers);
     * });
     * ```
     */
    getAllSuppliersNode(countSuppliers: number): Observable<Supplier[]> {
        return this.httpClient.get<Supplier[]>(`${this.nodeUrl}/suppliers/${countSuppliers}`);
    }

    /**
     * Obtiene el listado de proveedores desde el backend Spring Boot.
     *
     * @param countSuppliers - Cantidad de proveedores a solicitar
     * @returns Observable que emite un arreglo de {@link Supplier}
     *
     * @example
     * ```ts
     * this.suppliersService.getAllSuppliersSpringBoot(10).subscribe(suppliers => {
     *   console.log(suppliers);
     * });
     * ```
     */
    getAllSuppliersSpringBoot(countSuppliers: number): Observable<Supplier[]> {
        return this.httpClient.get<Supplier[]>(`${this.springBootUrl}/suppliers/${countSuppliers}`);
    }

}
