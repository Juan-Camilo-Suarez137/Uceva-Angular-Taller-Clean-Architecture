# Taller 6: Clean Architecture (Angular + Node.js + Spring Boot)

Repositorio monorepo para el taller de **Clean Architecture**, estructurado para el trabajo colaborativo por módulos de negocio (`users`, `products`, `commerce`, `finance`, `suppliers`).

---

## 📁 Estructura General del Monorepo

```text
├── Frontend-Angular/       # Aplicación principal en Angular 20 (Clean Architecture)
├── Backend-NodeJS/         # Backend en Node.js + Express + TypeScript + Prisma (Clean Architecture)
└── Backend-SpringBoot/     # Backend en Java 21 + Spring Boot 3.5 + JPA (Clean Architecture)
```

---

## 🧩 Distribución de Módulos por Capas

En los 3 proyectos se mantiene la separación estricta de **Clean Architecture** (Domain, Application, Infrastructure y Presentation), y dentro de cada capa existen **subcarpetas por cada módulo** para evitar conflictos en Git entre los integrantes del equipo:

- `users` *(Base)*
- `products` *(Base)*
- `commerce` *(Módulo 1)*
- `finance` *(Módulo 2)*
- `suppliers` *(Módulo 3)*

### 1. `Frontend-Angular/src/app/`

```text
src/app/
├── core/
│   ├── domain/
│   │   ├── models/{users,products,commerce,finance,suppliers}/
│   │   └── repositories/{users,products,commerce,finance,suppliers}/
│   ├── application/
│   │   └── usecases/{users,products,commerce,finance,suppliers}/
│   └── infrastructure/
│       └── repositories/
│           ├── local-implementation/{users,products,commerce,finance,suppliers}/
│           ├── node-implementation/{users,products,commerce,finance,suppliers}/
│           └── springboot-implementation/{users,products,commerce,finance,suppliers}/
├── mocks/{users,products,commerce,finance,suppliers}/
└── presentation/
    ├── components/{users-table,products-table,commerce-table,finance-table,suppliers-table}/
    └── pages/{users,products,commerce,finance,suppliers}/
```

### 2. `Backend-NodeJS/src/`

```text
src/
├── domain/
│   ├── models/{users,products,commerce,finance,suppliers}/
│   └── repositories/{users,products,commerce,finance,suppliers}/
├── application/
│   └── usecases/{users,products,commerce,finance,suppliers}/
└── infrastructure/
    ├── datasources/{users,products,commerce,finance,suppliers}/
    ├── repositories/{users,products,commerce,finance,suppliers}/
    └── web/
        ├── controllers/{users,products,commerce,finance,suppliers}/
        └── routes/{users,products,commerce,finance,suppliers}/
```

### 3. `Backend-SpringBoot/src/main/java/uceva/cleanarchitecture/`

```text
uceva/cleanarchitecture/
├── domain/
│   ├── entity/{users,products,commerce,finance,suppliers}/
│   └── repository/{users,products,commerce,finance,suppliers}/
├── application/
│   └── usecase/{users,products,commerce,finance,suppliers}/
└── infrastructure/
    ├── datasource/{users,products,commerce,finance,suppliers}/
    ├── repository/{users,products,commerce,finance,suppliers}/
    └── controller/{users,products,commerce,finance,suppliers}/
```
