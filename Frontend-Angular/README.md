# Clean Architecture en Angular

```text
src/app
│
├── core
│   ├── domain
│   │   ├── models
│   │   │   ├── users/user.model.ts
│   │   │   ├── products/product.model.ts
│   │   │   ├── commerce/commerce.model.ts
│   │   │   ├── finance/
│   │   │   └── suppliers/
│   │   └── repositories
│   │       ├── users/user.repository.ts
│   │       ├── products/product.repository.ts
│   │       ├── commerce/commerce.repository.ts
│   │       ├── finance/
│   │       └── suppliers/
│   │
│   ├── application
│   │   └── usecases
│   │       ├── users/get-all-users.usecase.ts
│   │       ├── products/get-all-products.usecase.ts
│   │       ├── commerce/get-all-commerce.usecase.ts
│   │       ├── finance/
│   │       └── suppliers/
│   │
│   └── infrastructure
│       ├── services
│       │   └── data.service.ts
│       └── repositories
│           ├── local-implementation/{users,products,commerce,finance,suppliers}/
│           ├── node-implementation/{users,products,commerce,finance,suppliers}/
│           └── springboot-implementation/{users,products,commerce,finance,suppliers}/
│
├── mocks/{users,products,commerce,finance,suppliers}/
├── presentation
│   ├── components/{alert,users-table,products-table,commerce-table,finance-table,suppliers-table}/
│   ├── interfaces/state.interface.ts
│   └── pages/{users,products,commerce,finance,suppliers}/
│
└── app.config.ts
```

# Funcionamiento del Frontend

## Ejecutar Frontend
```bash
npm run start
```

## Ejecutar Pruebas Unitarias y Cobertura
```bash
npm run test:cov
```

## Generar Documentación Técnica (Compodoc)
```bash
npm run doc:build
```

## URLs de Consumo

### Frontend
```text
http://localhost:4200
```

### Backend NodeJS
```text
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/commerce/{countCommerce}
```

### Backend SpringBoot
```text
http://localhost:8080/api/swagger-ui/index.html
http://localhost:8080/api/users/{countUsers}
http://localhost:8080/api/products/{countProducts}
http://localhost:8080/api/commerce/{countCommerce}
```