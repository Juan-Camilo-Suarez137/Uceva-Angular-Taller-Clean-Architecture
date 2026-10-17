import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../../environments/environment';
import { Supplier } from '../../../domain/models/suppliers/supplier.model';
import { SUPPLIERS_MOCK } from '../../../../mocks/suppliers/suppliers.mocks';
import { SuppliersService } from './suppliers.service';

jest.mock('@faker-js/faker', () => ({
  faker: {
    company: {
      name: jest.fn(() => 'Hettinger LLC'),
      catchPhrase: jest.fn(() => 'Proactive incremental adapter'),
    },
    location: {
      city: jest.fn(() => 'Cali'),
      country: jest.fn(() => 'Colombia'),
    },
    internet: {
      email: jest.fn(() => 'Contacto@Hettinger.com'),
    },
    phone: {
      number: jest.fn(() => '555-123-4567'),
    },
    helpers: {
      arrayElement: jest.fn((arr: unknown[]) => arr[0]),
    },
  },
}));

describe('SuppliersService', () => {
  let service: SuppliersService;
  let httpMock: HttpTestingController;

  const countSuppliers = 5;
  const pathUrlNode = `${environment.baseUrlNode}/api`;
  const pathUrlSpringBoot = `${environment.baseUrlSpringBoot}/api`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(SuppliersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe devolver el listado de proveedores local', (done) => {
    service.getAllSuppliersLocal(countSuppliers).subscribe((suppliers: Supplier[]) => {
      expect(suppliers.length).toEqual(countSuppliers);
      expect(suppliers[0]).toEqual({
        id: 1,
        companyName: 'Hettinger LLC',
        catchPhrase: 'Proactive incremental adapter',
        city: 'Cali',
        country: 'Colombia',
        email: 'contacto@hettinger.com',
        phone: '555-123-4567',
        status: 'active',
      });
      done();
    });
  });

  it('debe obtener proveedores desde Node por HTTP', () => {
    service.getAllSuppliersNode(countSuppliers).subscribe((suppliers) => {
      expect(suppliers).toEqual(SUPPLIERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/suppliers/${countSuppliers}`);
    expect(req.request.method).toBe('GET');
    req.flush(SUPPLIERS_MOCK);
  });

  it('debe obtener proveedores desde SpringBoot por HTTP', () => {
    service.getAllSuppliersSpringBoot(countSuppliers).subscribe((suppliers) => {
      expect(suppliers).toEqual(SUPPLIERS_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/suppliers/${countSuppliers}`);
    expect(req.request.method).toBe('GET');
    req.flush(SUPPLIERS_MOCK);
  });

});
