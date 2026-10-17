import { Router } from "express";
import { UsersRoutes } from "./users/users.routes";
import { ProductsRoutes } from "./products/products.routes";
import { CommerceRoutes } from "./commerce/commerce.routes";
import { FinanceRoutes } from "./finance/finance.routes";
import { SuppliersRoutes } from "./suppliers/suppliers.routes";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Proporciona un único punto de acceso a los endpoints
 * del backend, agrupando los módulos de usuarios, productos, comercio, finanzas y proveedores.
 *
 * @example
 * ```ts
 * import express from 'express';
 * import { AppRoutes } from './app.routes';
 *
 * const app = express();
 * app.use(AppRoutes.routes);
 * ```
 */
export class AppRoutes {

  /**
   * Devuelve el router principal de la aplicación.
   *
   * @returns Router de Express con todas las rutas registradas
   */
  static get routes(): Router {
    const router = Router();

    // Definir rutas
    router.use("/api/users", UsersRoutes.routes);
    router.use("/api/products", ProductsRoutes.routes);
    router.use("/api/commerce", CommerceRoutes.routes);
    router.use("/api/finance", FinanceRoutes.routes);
    router.use("/api/suppliers", SuppliersRoutes.routes);

    return router;
  }
}