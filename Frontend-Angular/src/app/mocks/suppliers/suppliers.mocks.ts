import { Supplier } from "../../core/domain/models/suppliers/supplier.model";

/**
 * Proveedores de ejemplo para las pruebas unitarias.
 *
 * @remarks
 * Simulan la respuesta de los backends para no depender
 * de Node.js ni de Spring Boot al ejecutar los tests.
 */
export const SUPPLIERS_MOCK: Supplier[] = [
    {
        id: 1,
        companyName: 'Hettinger LLC',
        catchPhrase: 'Proactive incremental adapter',
        city: 'Cali',
        country: 'Colombia',
        email: 'contacto@hettinger.com',
        phone: '555-123-4567',
        status: 'active',
    },
    {
        id: 2,
        companyName: 'Kuhn and Sons',
        catchPhrase: 'Reverse-engineered mobile framework',
        city: 'Lima',
        country: 'Peru',
        email: 'ventas@kuhn.com',
        phone: '555-987-6543',
        status: 'pending',
    },
    {
        id: 3,
        companyName: 'Ward Group',
        catchPhrase: 'Cross-platform systemic hub',
        city: 'Quito',
        country: 'Ecuador',
        email: 'info@ward.com',
        phone: '555-246-8101',
        status: 'inactive',
    }
];
