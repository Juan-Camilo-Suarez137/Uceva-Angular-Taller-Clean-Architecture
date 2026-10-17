import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllFinanceUseCase } from '../../../core/application/usecases/finance/get-all-finance.usecase';
import { FINANCE_MOCK } from '../../../mocks/finance/finance.mocks';
import { FinanceTableComponent } from '../../components/finance-table/finance-table.component';
import { FinancePage } from './finance.page';

describe('FinancePage', () => {
  let component: FinancePage;
  let fixture: ComponentFixture<FinancePage>;

  const GetAllFinanceUseCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancePage, FinanceTableComponent],
    })
    .overrideComponent(FinancePage, {
      set: {
        providers: [
          { provide: GetAllFinanceUseCase, useValue: GetAllFinanceUseCaseMock }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancePage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
    expect(component.state).toBe('init');
    expect(component.finances).toEqual([]);
  });

  it('debe ejecutar el caso de uso pidiendo 10 transacciones', () => {
    GetAllFinanceUseCaseMock.execute.mockReturnValue(of(FINANCE_MOCK));
    fixture.detectChanges();
    expect(GetAllFinanceUseCaseMock.execute).toHaveBeenCalledWith(10);
  });

  it('debe cargar las transacciones y cambiar el estado a success', () => {
    GetAllFinanceUseCaseMock.execute.mockReturnValue(of(FINANCE_MOCK));
    fixture.detectChanges();
    expect(component.finances).toEqual(FINANCE_MOCK);
    expect(component.state).toBe('success');
  });

  it('no debería cargar las transacciones y cambiar el estado a error', () => {
    GetAllFinanceUseCaseMock.execute.mockReturnValue(
      throwError(() => new Error('error'))
    );
    fixture.detectChanges();
    expect(component.finances).toEqual([]);
    expect(component.state).toBe('error');
  });

});