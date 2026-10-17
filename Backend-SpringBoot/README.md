# Clean Architecture en Spring Boot

```text
src/main/java/uceva/cleanarchitecture
│
├── domain
│   ├── entity/
│   │   ├── users/User.java
│   │   ├── products/Product.java
│   │   ├── commerce/Commerce.java
│   │   ├── finance/
│   │   └── suppliers/
│   │
│   └── repository/
│       ├── users/UserRepository.java
│       ├── products/ProductRepository.java
│       ├── commerce/CommerceRepository.java
│       ├── finance/
│       └── suppliers/
│
├── application
│   └── usecase/
│       ├── users/GetAllUsersUseCase.java
│       ├── products/GetAllProductsUseCase.java
│       ├── commerce/GetAllCommerceUseCase.java
│       ├── finance/
│       └── suppliers/
│
├── infrastructure
│   ├── controller/
│   │   ├── users/UserController.java
│   │   ├── products/ProductController.java
│   │   ├── commerce/CommerceController.java
│   │   ├── finance/
│   │   └── suppliers/
│   │
│   ├── repository/
│   │   ├── users/UserRepositoryImpl.java
│   │   ├── products/ProductRepositoryImpl.java
│   │   ├── commerce/CommerceRepositoryImpl.java
│   │   ├── finance/
│   │   └── suppliers/
│   │
│   └── datasource/
│       ├── users/UserDatasource.java
│       ├── products/ProductDatasource.java
│       ├── commerce/CommerceDatasource.java
│       ├── finance/
│       └── suppliers/
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
http://localhost:8080/api/suppliers/{countSuppliers}
```