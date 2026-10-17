/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Commerce:
 *       type: object
 *       description: Representa un artículo comercial del sistema
 *       required:
 *         - id
 *         - product
 *         - material
 *         - description
 *         - isbn
 *         - price
 *         - department
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         product:
 *           type: string
 *           example: Teclado Mecánico RGB
 *         material:
 *           type: string
 *           example: Aluminio
 *         description:
 *           type: string
 *           example: Teclado compacto de alto rendimiento para gaming y oficina
 *         isbn:
 *           type: string
 *           example: 978-3-16-148410-0
 *         price:
 *           type: number
 *           example: 250.50
 *         department:
 *           type: string
 *           enum:
 *             - Tecnologia
 *             - Hogar
 *             - Ropa
 *             - Deportes
 *             - Juguetes
 *           example: Tecnologia
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Finance:
 *       type: object
 *       description: Representa una transacción bancaria generada con faker.finance
 *       required:
 *         - id
 *         - accountName
 *         - accountNumber
 *         - type
 *         - amount
 *         - currency
 *         - issuer
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         accountName:
 *           type: string
 *           example: Personal Loan Account
 *         accountNumber:
 *           type: string
 *           example: "****2584"
 *         type:
 *           type: string
 *           enum:
 *             - deposit
 *             - withdrawal
 *             - payment
 *             - invoice
 *           example: payment
 *         amount:
 *           type: number
 *           example: 617.87
 *         currency:
 *           type: string
 *           example: USD
 *         issuer:
 *           type: string
 *           example: visa
 *         date:
 *           type: string
 *           format: date
 *           example: 2026-09-20
 */
export {};