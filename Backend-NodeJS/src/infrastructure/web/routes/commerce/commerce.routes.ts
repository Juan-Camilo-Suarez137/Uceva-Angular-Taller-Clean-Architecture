import { Router } from "express";
import { CommerceDatasource } from "../../../datasources/commerce/commerce.datasource";
import { CommerceRepositoryImpl } from "../../../repositories/commerce/commerce.repository.impl";
import { GetAllCommerceUseCase } from "../../../../application/usecases/commerce/get-all-commerce.usecase";
import { CommerceController } from "../../controllers/commerce/commerce.controller";

export class CommerceRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new CommerceRepositoryImpl(new CommerceDatasource());
    const getAllCommerce = new GetAllCommerceUseCase(repository);
    const controller = new CommerceController(getAllCommerce);

    /**
     * @openapi
     * /api/commerce/{countCommerce}:
     *   get:
     *     summary: Obtener listado de artículos comerciales
     *     description: Retorna una lista de artículos comerciales generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Commerce
     *     parameters:
     *       - in: path
     *         name: countCommerce
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de artículos comerciales a generar
     *     responses:
     *       200:
     *         description: Lista de artículos comerciales generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Commerce'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countCommerce", controller.getAllCommerce);

    return router;
  }
}
