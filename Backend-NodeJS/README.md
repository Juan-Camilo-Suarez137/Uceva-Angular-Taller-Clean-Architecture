# Clean Architecture en NodeJS

```text
src
├── domain
│   ├── models
│   │   ├── users/user.model.ts
│   │   ├── products/product.model.ts
│   │   ├── commerce/commerce.model.ts
│   │   ├── finance/
│   │   └── suppliers/
│   └── repositories
│       ├── users/user.repository.ts
│       ├── products/product.repository.ts
│       ├── commerce/commerce.repository.ts
│       ├── finance/
│       └── suppliers/
│
├── application
│   └── usecases
│       ├── users/get-all-users.usecase.ts
│       ├── products/get-all-products.usecase.ts
│       ├── commerce/get-all-commerce.usecase.ts
│       ├── finance/
│       └── suppliers/
│
├── infrastructure
│   ├── datasources
│   │   ├── users/user.datasource.ts
│   │   ├── products/product.datasource.ts
│   │   ├── commerce/commerce.datasource.ts
│   │   ├── finance/
│   │   └── suppliers/
│   ├── repositories
│   │   ├── users/user.repository.impl.ts
│   │   ├── products/product.repository.impl.ts
│   │   ├── commerce/commerce.repository.impl.ts
│   │   ├── finance/
│   │   └── suppliers/
│   └── web
│       ├── config/
│       ├── erros/
│       ├── interfaces/
│       ├── controllers/
│       │   ├── users/users.controller.ts
│       │   ├── products/products.controller.ts
│       │   ├── commerce/commerce.controller.ts
│       │   ├── finance/
│       │   └── suppliers/
│       ├── routes/
│       │   ├── users/users.routes.ts
│       │   ├── products/products.routes.ts
│       │   ├── commerce/commerce.routes.ts
│       │   ├── finance/
│       │   ├── suppliers/
│       │   └── routes.ts
│       └── server.ts
│
└── app.ts
```

# Funcionamiento del Backend

## Ejecutar Backend
```bash
npm run start
```

## URLs de Consumo y Documentación (OpenAPI / Swagger)
```text
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/commerce/{countCommerce}
http://localhost:3000/api/suppliers/{countSuppliers}
```