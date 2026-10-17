import { Request, Response } from "express";
import { GetAllSuppliersUseCase } from "../../../../application/usecases/suppliers/get-all-suppliers.usecase";
import { CustomError } from "../../erros/custom.error";
import { HandleError } from "../../erros/handle.error";

/**
 * Controlador de proveedores.
 *
 * @remarks
 * Recibe las peticiones HTTP y delega la lógica al caso de uso
 * `GetAllSuppliersUseCase`. No conoce el datasource ni el repositorio.
 */
export class SuppliersController {

  /**
   * Crea el controlador.
   *
   * @param getAllSuppliersUseCase Caso de uso para obtener proveedores
   */
  constructor(private getAllSuppliersUseCase: GetAllSuppliersUseCase){}

  /**
   * Maneja la petición HTTP para obtener un listado de proveedores.
   *
   * @remarks
   * Si `countSuppliers` no es un entero mayor o igual a 1 responde `400`.
   * El retardo artificial (`setTimeout`) se usa solo con fines demostrativos.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/suppliers/10
   * ```
   */
  getAllSuppliers = (req: Request, res: Response): void => {
    const countSuppliers = Number(req.params.countSuppliers);

    if (!Number.isInteger(countSuppliers) || countSuppliers < 1) {
      HandleError.error(CustomError.badRequest('countSuppliers debe ser un entero mayor o igual a 1'), res);
      return;
    }

    setTimeout(() => {
      this.getAllSuppliersUseCase
      .execute(countSuppliers)
      .then((suppliers) => res.status(201).json(suppliers))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
