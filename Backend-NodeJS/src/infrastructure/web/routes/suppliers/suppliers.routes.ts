import { Router } from "express";
import { SupplierDatasource } from "../../../datasources/suppliers/supplier.datasource";
import { SupplierRepositoryImpl } from "../../../repositories/suppliers/supplier.repository.impl";
import { GetAllSuppliersUseCase } from "../../../../application/usecases/suppliers/get-all-suppliers.usecase";
import { SuppliersController } from "../../controllers/suppliers/suppliers.controller";

/**
 * Rutas del módulo de proveedores.
 *
 * @remarks
 * Aquí se hace la composición del módulo: se crea el datasource,
 * se inyecta en la implementación del repositorio, el repositorio
 * en el caso de uso y el caso de uso en el controlador.
 */
export class SuppliersRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new SupplierRepositoryImpl(new SupplierDatasource());
    const getAllSuppliers = new GetAllSuppliersUseCase(repository);
    const controller = new SuppliersController(getAllSuppliers);

    /**
     * @openapi
     * /api/suppliers/{countSuppliers}:
     *   get:
     *     summary: Obtener listado de proveedores
     *     description: Retorna una lista de proveedores generados con faker.company según la cantidad solicitada.
     *     tags:
     *       - Suppliers
     *     parameters:
     *       - in: path
     *         name: countSuppliers
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de proveedores a generar
     *     responses:
     *       201:
     *         description: Lista de proveedores generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Supplier'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countSuppliers", controller.getAllSuppliers);

    return router;
  }
}
