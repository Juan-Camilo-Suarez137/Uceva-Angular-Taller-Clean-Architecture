import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FINANCE_MOCK } from '../../../../../mocks/finance/finance.mocks';
import { Finance } from '../../../../domain/models/finance/finance.model';
import { FinanceService } from '../../../services/finance/finance.service';
import { FinanceSpringBootRepositoryImpl } from './finance-springboot.repository.impl';

// faker es un módulo ESM que Jest no puede leer; este repositorio no lo usa
// directamente (el servicio está simulado), así que se reemplaza por un objeto vacío.
jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('FinanceSpringBootRepositoryImpl (Infrastructure)', () => {
  let repository: FinanceSpringBootRepositoryImpl;

  const countFinance = 5;
  const FinanceServiceMock = {  getAllFinanceSpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            FinanceSpringBootRepositoryImpl,
            { provide: FinanceService, useValue: FinanceServiceMock }
        ]
    })
    .compileComponents();
    repository = TestBed.inject(FinanceSpringBootRepositoryImpl)
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a FinanceService.getAllFinanceSpringBoot()', () => {
    const getAllSpy = FinanceServiceMock.getAllFinanceSpringBoot.mockReturnValue(of([]));
    repository.getAll(countFinance).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countFinance);
  });

  it('debe devolver el listado de transacciones como Observable', (done) => {
    FinanceServiceMock.getAllFinanceSpringBoot.mockReturnValue(of(FINANCE_MOCK))
    repository.getAll(countFinance).subscribe((finances: Finance[]) => {
      expect(finances).toEqual(FINANCE_MOCK);
      done();
    });
  });
});