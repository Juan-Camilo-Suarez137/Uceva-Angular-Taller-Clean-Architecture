import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FINANCE_MOCK } from '../../../../../mocks/finance/finance.mocks';
import { Finance } from '../../../../domain/models/finance/finance.model';
import { FinanceService } from '../../../services/finance/finance.service';
import { FinanceLocalRepositoryImpl } from './finance-local.repository.impl';

// faker es un módulo ESM que Jest no puede leer; este repositorio no lo usa
// directamente (el servicio está simulado), así que se reemplaza por un objeto vacío.
jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('FinanceLocalRepositoryImpl (Infrastructure)', () => {
  let repository: FinanceLocalRepositoryImpl;

  const countFinance = 5;
  const FinanceServiceMock = {  getAllFinanceLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            FinanceLocalRepositoryImpl,
            { provide: FinanceService, useValue: FinanceServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(FinanceLocalRepositoryImpl)
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a FinanceService.getAllFinanceLocal()', () => {
    const getAllSpy = FinanceServiceMock.getAllFinanceLocal.mockReturnValue(of([]));
    repository.getAll(countFinance).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countFinance);
  });

  it('debe devolver el listado de transacciones como Observable', (done) => {
    FinanceServiceMock.getAllFinanceLocal.mockReturnValue(of(FINANCE_MOCK))
    repository.getAll(countFinance).subscribe((finances: Finance[]) => {
      expect(finances).toEqual(FINANCE_MOCK);
      done();
    });
  });
});