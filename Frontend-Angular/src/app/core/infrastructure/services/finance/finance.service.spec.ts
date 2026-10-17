import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../../environments/environment';
import { Finance } from '../../../domain/models/finance/finance.model';
import { FINANCE_MOCK } from '../../../../mocks/finance/finance.mocks';
import { FinanceService } from './finance.service';

jest.mock('@faker-js/faker', () => ({
  faker: {
    finance: {
      accountName: jest.fn(() => 'Savings Account'),
      accountNumber: jest.fn(() => '1234'),
      transactionType: jest.fn(() => 'deposit'),
      amount: jest.fn(() => '100.50'),
      currencyCode: jest.fn(() => 'USD'),
      creditCardIssuer: jest.fn(() => 'visa'),
    },
    date: {
      recent: jest.fn(() => new Date('2026-10-01T10:00:00.000Z')),
    },
  },
}));

describe('FinanceService', () => {
  let service: FinanceService;
  let httpMock: HttpTestingController;

  const countFinance = 5;
  const pathUrlNode = `${environment.baseUrlNode}/api`;
  const pathUrlSpringBoot = `${environment.baseUrlSpringBoot}/api`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(FinanceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe devolver el listado de transacciones local', (done) => {
    service.getAllFinanceLocal(countFinance).subscribe((finances: Finance[]) => {
      expect(finances.length).toEqual(countFinance);
      expect(finances[0]).toEqual({
        id: 1,
        accountName: 'Savings Account',
        accountNumber: '****1234',
        type: 'deposit',
        amount: 100.5,
        currency: 'USD',
        issuer: 'visa',
        date: '2026-10-01',
      });
      done();
    });
  });

  it('debe obtener transacciones desde Node por HTTP', () => {
    service.getAllFinanceNode(countFinance).subscribe((finances) => {
      expect(finances).toEqual(FINANCE_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlNode}/finance/${countFinance}`);
    expect(req.request.method).toBe('GET');
    req.flush(FINANCE_MOCK);
  });

  it('debe obtener transacciones desde SpringBoot por HTTP', () => {
    service.getAllFinanceSpringBoot(countFinance).subscribe((finances) => {
      expect(finances).toEqual(FINANCE_MOCK);
    });
    const req = httpMock.expectOne(`${pathUrlSpringBoot}/finance/${countFinance}`);
    expect(req.request.method).toBe('GET');
    req.flush(FINANCE_MOCK);
  });

});