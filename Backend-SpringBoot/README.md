# Clean Architecture en Spring Boot

```text
src/main/java/uceva/cleanarchitecture
│
├── domain
│   ├── entity/
│   │   ├── users/User.java
│   │   ├── products/Product.java
│   │   ├── commerce/Commerce.java
│   │   ├── finance/Finance.java
│   │   └── suppliers/Supplier.java
│   │
│   └── repository/
│       ├── users/UserRepository.java
│       ├── products/ProductRepository.java
│       ├── commerce/CommerceRepository.java
│       ├── finance/FinanceRepository.java
│       └── suppliers/SupplierRepository.java
│
├── application
│   └── usecase/
│       ├── users/GetAllUsersUseCase.java
│       ├── products/GetAllProductsUseCase.java
│       ├── commerce/GetAllCommerceUseCase.java
│       ├── finance/GetAllFinanceUseCase.java
│       └── suppliers/GetAllSuppliersUseCase.java
│
├── infrastructure
│   ├── controller/
│   │   ├── users/UserController.java
│   │   ├── products/ProductController.java
│   │   ├── commerce/CommerceController.java
│   │   ├── finance/FinanceController.java
│   │   └── suppliers/SupplierController.java
│   │
│   ├── repository/
│   │   ├── users/UserRepositoryImpl.java
│   │   ├── products/ProductRepositoryImpl.java
│   │   ├── commerce/CommerceRepositoryImpl.java
│   │   ├── finance/FinanceRepositoryImpl.java
│   │   └── suppliers/SupplierRepositoryImpl.java
│   │
│   └── datasource/
│       ├── users/UserDatasource.java
│       ├── products/ProductDatasource.java
│       ├── commerce/CommerceDatasource.java
│       ├── finance/FinanceDatasource.java
│       └── suppliers/SupplierDatasource.java
│
├── config
│   ├── AppConfig.java
│   └── CorsConfig.java
│
└── UcevaSpringBootTallerCleanArchitectureApplication.java
```

## Funcionamiento del Backend

### URLs de Consumo y Documentación (OpenAPI / Swagger)
```text
http://localhost:8080/api/swagger-ui/index.html
http://localhost:8080/api/users/{countUsers}
http://localhost:8080/api/products/{countProducts}
http://localhost:8080/api/commerce/{countCommerce}
http://localhost:8080/api/finance/{countFinance}
http://localhost:8080/api/suppliers/{countSuppliers}
```