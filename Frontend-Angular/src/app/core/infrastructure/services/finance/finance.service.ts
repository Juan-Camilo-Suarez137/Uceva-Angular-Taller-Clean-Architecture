import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { faker } from '@faker-js/faker';
import { Observable, of } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { Finance, FinanceType } from "../../../domain/models/finance/finance.model";

/**
 * Servicio de infraestructura para obtener transacciones.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa
 * como un **Data Source** del módulo de finanzas, con tres orígenes:
 *
 * - Datos locales generados con `faker.finance`
 * - Backend Node.js mediante HTTP
 * - Backend Spring Boot mediante HTTP
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No debe ser consumido directamente por los casos de uso ni los componentes.
 *
 * Lo usan las implementaciones del repositorio de finanzas.
 */
@Injectable({ providedIn: 'root' })
export class FinanceService {
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
     * Obtiene el listado de transacciones desde datos locales generados con faker.
     *
     * @param countFinance - Cantidad de transacciones a generar
     * @returns Observable que emite un arreglo de {@link Finance}
     */
    getAllFinanceLocal(countFinance: number): Observable<Finance[]> {
        const finances: Finance[] = [];

        for (let i = 1; i <= countFinance; i++) {
            finances.push({
                id: i,
                accountName: faker.finance.accountName(),
                accountNumber: `****${faker.finance.accountNumber(4)}`,
                type: faker.finance.transactionType() as FinanceType,
                amount: Number(faker.finance.amount({ min: 10, max: 5000, dec: 2 })),
                currency: faker.finance.currencyCode(),
                issuer: faker.finance.creditCardIssuer(),
                date: faker.date.recent({ days: 30 }).toISOString().slice(0, 10),
            });
        }

        return of(finances);
    }

    /**
     * Obtiene el listado de transacciones desde el backend Node.js.
     *
     * @param countFinance - Cantidad de transacciones a solicitar
     * @returns Observable que emite un arreglo de {@link Finance}
     *
     * @example
     * ```ts
     * this.financeService.getAllFinanceNode(10).subscribe(finances => {
     *   console.log(finances);
     * });
     * ```
     */
    getAllFinanceNode(countFinance: number): Observable<Finance[]> {
        return this.httpClient.get<Finance[]>(`${this.nodeUrl}/finance/${countFinance}`);
    }

    /**
     * Obtiene el listado de transacciones desde el backend Spring Boot.
     *
     * @param countFinance - Cantidad de transacciones a solicitar
     * @returns Observable que emite un arreglo de {@link Finance}
     *
     * @example
     * ```ts
     * this.financeService.getAllFinanceSpringBoot(10).subscribe(finances => {
     *   console.log(finances);
     * });
     * ```
     */
    getAllFinanceSpringBoot(countFinance: number): Observable<Finance[]> {
        return this.httpClient.get<Finance[]>(`${this.springBootUrl}/finance/${countFinance}`);
    }

}