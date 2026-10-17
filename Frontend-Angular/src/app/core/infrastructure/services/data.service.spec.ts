import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { Commerce } from '../../domain/models/commerce/commerce.model';
import { Product } from '../../domain/models/products/product.model';
import { User } from '../../domain/models/users/user.model';
import { DataService } from './data.service';
import { USERS_MOCK } from '../../../mocks/users/users.mocks';
import { PRODUCTS_MOCK } from '../../../mocks/products/products.mocks';
import { COMMERCE_MOCK } from '../../../mocks/commerce/commerce.mocks';

jest.mock('@faker-js/faker', () => ({
  faker: {
    commerce: {
      productName: jest.fn(() => 'Producto Test'),
      productMaterial: jest.fn(() => 'Aluminio'),
      productDescription: jest.fn(() => 'Descripción Test'),
      isbn: jest.fn(() => '978-3-16-148410-0'),
      price: jest.fn(() => '10.00'),
    },
    person: {
      firstName: jest.fn(() => 'Juan'),
      lastName: jest.fn(() => 'Pérez'),
    },
    number: {
      int: jest.fn(() => 30),
    },
    internet: {
      email: jest.fn(() => 'test@mail.com'),
    },
    helpers: {
      arrayElement: jest.fn((arr) => arr[0]),
    },
  },
}));

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  
  const countUsers = 5;
  const countProducts = 5;
  const countCommerce = 5;
  const pathUrlNode = `${environment.baseUrlNode}/api`;
  const pathUrlSpringBoot = `${environment.baseUrlSpringBoot}/api`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
      expect(service).toBeTruthy();
  });
  
  it('debe devolver el listado de usuarios locale', (done) => {
    service.getAllUsersLocal(countUsers).subscribe((users: User[]) => {
      expect(users.length).toEqual(countUsers);
      done();
    });
  });

  it('debe devolver el listado de productos locale', (done) => {
    service.getAllProductsLocal(countProducts).subscribe((products: Product[]) => {
      expect(products.length).toEqual(countProducts);
      done();
    });
  });

  it('debe devolver el listado de artículos comerciales locale', (done) => {
    service.getAllCommerceLocal(countCommerce).subscribe((commerce: Commerce[]) => {
      expect(commerce.length).toEqual(countCommerce);
      done();
    });
  });

  it('debe obtener usuarios desde Node por HTTP', () => {
    service.getAllUsersNode(countUsers).subscribe((users) => {
      expect(users).toEqual(USERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/users/${countUsers}`);
    expect(req.request.method).toBe('GET');
    req.flush(USERS_MOCK);
  });

  it('debe obtener productos desde Node por HTTP', () => {
    service.getAllProductsNode(countProducts).subscribe((products) => {
      expect(products).toEqual(PRODUCTS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/products/${countProducts}`);
    expect(req.request.method).toBe('GET');
    req.flush(PRODUCTS_MOCK);
  });

  it('debe obtener artículos comerciales desde Node por HTTP', () => {
    service.getAllCommerceNode(countCommerce).subscribe((commerce) => {
      expect(commerce).toEqual(COMMERCE_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/commerce/${countCommerce}`);
    expect(req.request.method).toBe('GET');
    req.flush(COMMERCE_MOCK);
  });

  it('debe obtener usuarios desde SpringBoot por HTTP', () => {
    service.getAllUsersSpringBoot(countUsers).subscribe((users) => {
      expect(users).toEqual(USERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/users/${countUsers}`);
    expect(req.request.method).toBe('GET');
    req.flush(USERS_MOCK);
  });

  it('debe obtener productos desde SpringBoot por HTTP', () => {
    service.getAllProductsSpringBoot(countProducts).subscribe((products) => {
      expect(products).toEqual(PRODUCTS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/products/${countProducts}`);
    expect(req.request.method).toBe('GET');
    req.flush(PRODUCTS_MOCK);
  });

  it('debe obtener artículos comerciales desde SpringBoot por HTTP', () => {
    service.getAllCommerceSpringBoot(countCommerce).subscribe((commerce) => {
      expect(commerce).toEqual(COMMERCE_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/commerce/${countCommerce}`);
    expect(req.request.method).toBe('GET');
    req.flush(COMMERCE_MOCK);
  });

});