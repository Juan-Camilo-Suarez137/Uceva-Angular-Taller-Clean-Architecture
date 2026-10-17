import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommerceRepository } from "../../../../domain/repositories/commerce/commerce.repository";
import { DataService } from "../../../services/data.service";
import { Commerce } from "../../../../domain/models/commerce/commerce.model";

/**
 * Implementación concreta SpringBoot del repositorio de comercio.
 *
 * @remarks
 * Este repositorio pertenece a la **capa de Infrastructure**
 * y actúa como un **Adapter** entre:
 *
 * - El contrato del dominio {@link CommerceRepository}
 * - La fuente de datos {@link DataService}
 *
 * @see {@link CommerceRepository}
 * @see {@link DataService}
 */
@Injectable()
export class CommerceSpringBootRepositoryImpl extends CommerceRepository {

    /**
     * Datasource encargado de obtener los datos de comercio.
     */
    private dataService = inject(DataService);

    /**
     * Obtiene el listado completo de artículos comerciales desde SpringBoot.
     *
     * @param countCommerce - Cantidad de artículos comerciales a solicitar
     * @returns Observable que emite un arreglo de {@link Commerce}
     */
    getAll(countCommerce: number): Observable<Commerce[]> {
        return this.dataService.getAllCommerceSpringBoot(countCommerce);
    }

}
