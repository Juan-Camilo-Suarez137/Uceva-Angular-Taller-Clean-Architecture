import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FinanceRepository } from "../../../../domain/repositories/finance/finance.repository";
import { FinanceService } from "../../../services/finance/finance.service";
import { Finance } from "../../../../domain/models/finance/finance.model";

/**
 * Implementación concreta del repositorio de finanzas.
 *
 * @remarks
 * Este repositorio pertenece a la **capa de Infrastructure**
 * y actúa como un **Adapter** entre:
 *
 * - El contrato del dominio {@link FinanceRepository}
 * - La fuente de datos {@link FinanceService}
 *
 * Responsabilidades:
 * - Implementar el contrato definido por el dominio
 * - Delegar la obtención de datos al datasource
 * - Adaptar, transformar o enriquecer los datos si es necesario
 *
 * ❗ Este repositorio NO contiene lógica de negocio.
 * ❗ No expone detalles de infraestructura al dominio.
 *
 * @see {@link FinanceRepository}
 * @see {@link FinanceService}
 */
@Injectable()
export class FinanceLocalRepositoryImpl extends FinanceRepository {

    /**
     * Datasource encargado de obtener los datos de finanzas.
     *
     * @remarks
     * Se inyecta usando la función `inject()` de Angular
     * para evitar constructores explícitos y favorecer
     * un estilo más declarativo.
     */
    private financeService = inject(FinanceService);

    /**
     * Obtiene el listado de transacciones.
     *
     * @remarks
     * Este método cumple el contrato definido en
     * {@link FinanceRepository#getAll}.
     *
     * Actualmente delega directamente la llamada al
     * {@link FinanceService}, pero este es el lugar
     * adecuado para:
     * - Mapear DTOs a modelos de dominio
     * - Aplicar filtros o transformaciones
     * - Manejar errores o estrategias de caché
     *
     * @param countFinance - Cantidad de transacciones a solicitar
     * @returns Observable que emite un arreglo de {@link Finance}
     */
    getAll(countFinance: number): Observable<Finance[]> {
        return this.financeService.getAllFinanceLocal(countFinance);
    }

}