import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CommerceRepository } from './core/domain/repositories/commerce/commerce.repository';
import { ProductRepository } from './core/domain/repositories/products/product.repository';
import { UserRepository } from './core/domain/repositories/users/user.repository';
import { CommerceNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/commerce/commerce-node.repository.impl';
import { ProductNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/products/product-node.repository.impl';
import { UserNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/users/user-node.repository.impl';
import { CommerceSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/commerce/commerce-springboot.repository.impl';
import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/users/user-springboot.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/products/product-springboot.repository.impl';
import { CommerceLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/commerce/commerce-local.repository.impl';
import { UserLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/users/user-local.repository.impl';
import { ProductLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/products/product-local.repository.impl';
import { FinanceRepository } from './core/domain/repositories/finance/finance.repository';
import { FinanceLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/finance/finance-local.repository.impl';
import { FinanceNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/finance/finance-node.repository.impl';
import { FinanceSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/finance/finance-springboot.repository.impl';

/**
 * Configuración principal de la aplicación Angular.
 *
 * @remarks
 * Este objeto define los *providers* globales utilizados
 * en el arranque de la aplicación mediante la API
 * `bootstrapApplication`.
 *
 * Incluye:
 * - Manejo global de errores del navegador
 * - Configuración de detección de cambios
 * - Sistema de enrutamiento
 * - Cliente HTTP con interceptores
 *
 * @see {@link bootstrapApplication}
 */
export const appConfig: ApplicationConfig = {

  /**
   * Proveedores globales de la aplicación.
   *
   * @remarks
   * Se registran servicios y configuraciones esenciales
   * que estarán disponibles en toda la aplicación.
   */
  providers: [

    //Local Providers
    { provide: UserRepository, useClass: UserLocalRepositoryImpl },
    { provide: ProductRepository, useClass: ProductLocalRepositoryImpl },
    //{ provide: CommerceRepository, useClass: CommerceLocalRepositoryImpl },
    { provide: FinanceRepository, useClass: FinanceLocalRepositoryImpl },
    
    //Node Providers
    //{ provide: UserRepository, useClass: UserNodeRepositoryImpl },
    //{ provide: ProductRepository, useClass: ProductNodeRepositoryImpl },
    //{ provide: CommerceRepository, useClass: CommerceNodeRepositoryImpl },
    //{ provide: FinanceRepository, useClass: FinanceNodeRepositoryImpl },

    //SpringBoot Providers
    //{ provide: UserRepository, useClass: UserSpringBootRepositoryImpl },
    //{ provide: ProductRepository, useClass: ProductSpringBootRepositoryImpl },
    { provide: CommerceRepository, useClass: CommerceSpringBootRepositoryImpl },
    //{ provide: FinanceRepository, useClass: FinanceSpringBootRepositoryImpl },

    /**
     * Proveedor de listeners globales de errores del navegador.
     *
     * @remarks
     * Captura errores no controlados y eventos globales,
     * permitiendo un manejo centralizado de excepciones.
     */
    provideBrowserGlobalErrorListeners(),

    /**
     * Configuración de la detección de cambios basada en Zone.js.
     *
     * @remarks
     * `eventCoalescing: true` agrupa múltiples eventos en un
     * solo ciclo de detección de cambios, mejorando
     * el rendimiento de la aplicación.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Proveedor del sistema de enrutamiento.
     *
     * @remarks
     * Registra las rutas definidas en `routes`
     * para la navegación de la aplicación.
     *
     * @see {@link routes}
     */
    provideRouter(routes),

    provideHttpClient(),
  ]
};