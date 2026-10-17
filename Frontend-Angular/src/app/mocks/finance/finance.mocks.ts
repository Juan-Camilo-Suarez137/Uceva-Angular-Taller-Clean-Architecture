import { Finance } from "../../core/domain/models/finance/finance.model";

/**
 * Transacciones de ejemplo para las pruebas unitarias.
 *
 * @remarks
 * Simulan la respuesta de los backends para no depender
 * de Node.js ni de Spring Boot al ejecutar los tests.
 */
export const FINANCE_MOCK: Finance[] = [
    {
        id: 1,
        accountName: 'Personal Loan Account',
        accountNumber: '****2584',
        type: 'payment',
        amount: 617.87,
        currency: 'USD',
        issuer: 'visa',
        date: '2026-09-20',
    },
    {
        id: 2,
        accountName: 'Savings Account',
        accountNumber: '****9187',
        type: 'deposit',
        amount: 1500,
        currency: 'EUR',
        issuer: 'mastercard',
        date: '2026-09-18',
    }
];