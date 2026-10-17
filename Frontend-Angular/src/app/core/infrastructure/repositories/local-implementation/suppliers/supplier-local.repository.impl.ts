import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SupplierRepository } from "../../../../domain/repositories/suppliers/supplier.repository";
import { SuppliersService } from "../../../services/suppliers/suppliers.service";
import { Supplier } from "../../../../domain/models/suppliers/supplier.model";

/**
 * Implementación concreta del repositorio de proveedores (Local).
 *
 * @remarks
 * Este repositorio pertenece a la **capa de Infrastructure**
 * y actúa como un **Adapter** entre:
 *
 * - El contrato del dominio {@link SupplierRepository}
 * - La fuente de datos {@link SuppliersService}
 *
 * Responsabilidades:
 * - Implementar el contrato definido por el dominio
 * - Delegar la obtención de datos al datasource
 * - Adaptar, transformar o enriquecer los datos si es necesario
 *
 * ❗ Este repositorio NO contiene lógica de negocio.
 * ❗ No expone detalles de infraestructura al dominio.
 *
 * @see {@link SupplierRepository}
 * @see {@link SuppliersService}
 */
@Injectable()
export class SupplierLocalRepositoryImpl extends SupplierRepository {

    /**
     * Datasource encargado de obtener los datos de proveedores.
     *
     * @remarks
     * Se inyecta usando la función `inject()` de Angular
     * para evitar constructores explícitos y favorecer
     * un estilo más declarativo.
     */
    private suppliersService = inject(SuppliersService);

    /**
     * Obtiene el listado de proveedores.
     *
     * @remarks
     * Este método cumple el contrato definido en
     * {@link SupplierRepository#getAll}.
     *
     * Actualmente delega directamente la llamada al
     * {@link SuppliersService}, pero este es el lugar
     * adecuado para:
     * - Mapear DTOs a modelos de dominio
     * - Aplicar filtros o transformaciones
     * - Manejar errores o estrategias de caché
     *
     * @param countSuppliers - Cantidad de proveedores a solicitar
     * @returns Observable que emite un arreglo de {@link Supplier}
     */
    getAll(countSuppliers: number): Observable<Supplier[]> {
        return this.suppliersService.getAllSuppliersLocal(countSuppliers);
    }

}
