import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FINANCE_MOCK } from '../../../../../mocks/finance/finance.mocks';
import { Finance } from '../../../../domain/models/finance/finance.model';
import { FinanceService } from '../../../services/finance/finance.service';
import { FinanceNodeRepositoryImpl } from './finance-node.repository.impl';

// faker es un módulo ESM que Jest no puede leer; este repositorio no lo usa
// directamente (el servicio está simulado), así que se reemplaza por un objeto vacío.
jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('FinanceNodeRepositoryImpl (Infrastructure)', () => {
  let repository: FinanceNodeRepositoryImpl;

  const countFinance = 5;
  const FinanceServiceMock = {  getAllFinanceNode: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            FinanceNodeRepositoryImpl,
            { provide: FinanceService, useValue: FinanceServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(FinanceNodeRepositoryImpl)
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a FinanceService.getAllFinanceNode()', () => {
    const getAllSpy = FinanceServiceMock.getAllFinanceNode.mockReturnValue(of([]));
    repository.getAll(countFinance).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countFinance);
  });

  it('debe devolver el listado de transacciones como Observable', (done) => {
    FinanceServiceMock.getAllFinanceNode.mockReturnValue(of(FINANCE_MOCK))
    repository.getAll(countFinance).subscribe((finances: Finance[]) => {
      expect(finances).toEqual(FINANCE_MOCK);
      done();
    });
  });
});