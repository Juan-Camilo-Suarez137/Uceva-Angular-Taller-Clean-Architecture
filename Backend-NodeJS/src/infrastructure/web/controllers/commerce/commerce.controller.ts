import { Request, Response } from "express";
import { GetAllCommerceUseCase } from "../../../../application/usecases/commerce/get-all-commerce.usecase";
import { HandleError } from "../../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con comercio.
 *
 * @remarks
 * Esta clase pertenece a la **capa más externa** de la aplicación
 * (*Frameworks & Drivers*), y su responsabilidad es:
 *
 * - Recibir solicitudes HTTP
 * - Extraer parámetros de la request
 * - Delegar la lógica al caso de uso correspondiente
 * - Transformar la respuesta del caso de uso en una respuesta HTTP
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No accede directamente a repositorios ni datasources.
 *
 * Depende del caso de uso {@link GetAllCommerceUseCase}.
 */
export class CommerceController {

  /**
   * Crea una nueva instancia del controlador de comercio.
   *
   * @param getAllCommerceUseCase - Caso de uso encargado
   * de obtener el listado de artículos comerciales
   */
  constructor(private getAllCommerceUseCase: GetAllCommerceUseCase) {}

  /**
   * Maneja la petición HTTP para obtener artículos comerciales.
   *
   * @remarks
   * Extrae el parámetro `countCommerce` desde la URL,
   * ejecuta el caso de uso correspondiente y devuelve
   * la respuesta en formato JSON.
   *
   * Incluye un `setTimeout` únicamente con fines
   * demostrativos (simulación de latencia).
   *
   * Los errores son delegados al manejador centralizado
   * {@link HandleError}.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getAllCommerce = (req: Request, res: Response): void => {
    const { countCommerce } = req.params;

    setTimeout(() => {
      this.getAllCommerceUseCase
        .execute(Number(countCommerce))
        .then((commerce) => res.status(201).json(commerce))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
