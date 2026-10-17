import { TestBed } from "@angular/core/testing";
import { GetAllFinanceUseCase } from "./get-all-finance.usecase";
import { FinanceRepository } from "../../../domain/repositories/finance/finance.repository";
import { firstValueFrom, of, throwError } from "rxjs";
import { FINANCE_MOCK } from "../../../../mocks/finance/finance.mocks";


describe('GetAllFinanceUseCase', () => {
  let useCase: GetAllFinanceUseCase;

  const countFinance = 5;
  const FinanceRepositoryMock: jest.Mocked<FinanceRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers: [
            GetAllFinanceUseCase,
            { provide: FinanceRepository, useValue: FinanceRepositoryMock }
        ]
    })
    .compileComponents();
    useCase = TestBed.inject(GetAllFinanceUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllFinanceUseCase);
  });

  it('debería delegar la llamada del repository', async () => {
    FinanceRepositoryMock.getAll.mockReturnValue(of(FINANCE_MOCK));
    const result = await firstValueFrom(useCase.execute(countFinance));
    expect(FinanceRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(FinanceRepositoryMock.getAll).toHaveBeenCalledWith(countFinance);
    expect(result).toEqual(FINANCE_MOCK);
  });

  it('debería propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Fallo la busqueda de transacciones';
    FinanceRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countFinance);
    await expect(firstValueFrom(result)).rejects.toThrow(errorMessage);
    expect(FinanceRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(FinanceRepositoryMock.getAll).toHaveBeenCalledWith(countFinance);
  });

});