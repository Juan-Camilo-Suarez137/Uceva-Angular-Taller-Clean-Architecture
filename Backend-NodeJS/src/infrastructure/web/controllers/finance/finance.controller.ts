import { Request, Response } from "express";
import { GetAllFinanceUseCase } from "../../../../application/usecases/finance/get-all-finance.usecase";
import { HandleError } from "../../erros/handle.error";

/**
 * Controlador de finanzas.
 *
 * @remarks
 * Recibe las peticiones HTTP y delega la lógica al caso de uso
 * `GetAllFinanceUseCase`. No conoce el datasource ni el repositorio.
 */
export class FinanceController {

  /**
   * Crea el controlador.
   *
   * @param getAllFinanceUseCase Caso de uso para obtener transacciones
   */
  constructor(private getAllFinanceUseCase: GetAllFinanceUseCase){}

  /**
   * Maneja la petición HTTP para obtener un listado de transacciones.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/finance/10
   * ```
   */
  getAllFinance = (req: Request, res: Response): void => {
    const { countFinance } = req.params;

    setTimeout(() => {
      this.getAllFinanceUseCase
      .execute(Number(countFinance))
      .then((finances) => res.status(201).json(finances))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}