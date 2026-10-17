import { Router } from "express";
import { FinanceDatasource } from "../../../datasources/finance/finance.datasource";
import { FinanceRepositoryImpl } from "../../../repositories/finance/finance.repository.impl";
import { GetAllFinanceUseCase } from "../../../../application/usecases/finance/get-all-finance.usecase";
import { FinanceController } from "../../controllers/finance/finance.controller";

/**
 * Rutas del módulo de finanzas.
 *
 * @remarks
 * Aquí se hace la composición del módulo: se crea el datasource,
 * se inyecta en la implementación del repositorio, el repositorio
 * en el caso de uso y el caso de uso en el controlador.
 */
export class FinanceRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new FinanceRepositoryImpl(new FinanceDatasource());
    const getAllFinance = new GetAllFinanceUseCase(repository);
    const controller = new FinanceController(getAllFinance);

    /**
     * @openapi
     * /api/finance/{countFinance}:
     *   get:
     *     summary: Obtener listado de transacciones
     *     description: Retorna una lista de transacciones bancarias generadas con faker.finance según la cantidad solicitada.
     *     tags:
     *       - Finance
     *     parameters:
     *       - in: path
     *         name: countFinance
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de transacciones a generar
     *     responses:
     *       201:
     *         description: Lista de transacciones generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Finance'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countFinance", controller.getAllFinance);

    return router;
  }
}