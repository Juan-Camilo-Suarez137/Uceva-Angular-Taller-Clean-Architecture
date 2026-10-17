import { faker } from '@faker-js/faker';
import { Finance, FinanceType } from "../../../domain/models/finance/finance.model";

/**
 * Datasource de finanzas.
 *
 * @remarks
 * Pertenece a la **capa de infraestructura**. Genera transacciones
 * ficticias con el módulo `faker.finance`.
 */
export class FinanceDatasource {

    /**
     * Obtiene un listado de transacciones generadas dinámicamente.
     *
     * @param countFinance Cantidad de transacciones a generar
     * @returns Promesa que resuelve un arreglo de transacciones
     */
    async getAll(countFinance: number): Promise<Finance[]> {
        const finances: Promise<Finance>[] = [];

        for (let i = 1; i <= countFinance; i++) {
            finances.push(this.generateFinance(i));
        }

        return Promise.all(finances);
    }

    /**
     * Genera una transacción ficticia.
     *
     * @param id Identificador único de la transacción
     * @returns Promesa que resuelve una transacción generada
     */
    private generateFinance(id: number): Promise<Finance> {
        return Promise.resolve({
            id,
            accountName: faker.finance.accountName(),
            accountNumber: `****${faker.finance.accountNumber(4)}`,
            type: faker.finance.transactionType() as FinanceType,
            amount: Number(faker.finance.amount({ min: 10, max: 5000, dec: 2 })),
            currency: faker.finance.currencyCode(),
            issuer: faker.finance.creditCardIssuer(),
            date: faker.date.recent({ days: 30 }).toISOString().slice(0, 10),
        });
    }

}